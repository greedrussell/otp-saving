import React from 'react'
import { Element } from 'react-scroll'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './calculator.css'
import CalculatorInfoPanel from './components/calculator-info-panel/calculator-info-panel.component'
import PlusesList from './components/pluses/pluses-list.component'
import CalculatorInput from './components/calculator-input/calculator-input.component'
import CalculatorMonthTabs from './components/calculator-month-tabs/calculator-month-tabs.component'
import CalculatorBonusInput from './components/calculator-bonus-input/calculator-bonus-input.component'
import CalculatorTabsComponent from './components/calculator-tabs/calculator-tabs.component'
import actionSetTariff from '../../state/tariff/actions/set-tariff.action'

class Calculator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			// для подсчета дохода
			month: 3,
			depositRate: 300000,
			transactionRate: 15000,
			percent: 4,
			bonusPercent: 1,
			// finaly data
			bonusSum: 0,
			totalSum: 0,
		}
	}

	componentDidMount() {
		const { bonusPercent, depositRate, percent, month } = this.state

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		window.addEventListener("load", this.greenLineSetWidth)
		window.addEventListener("resize", this.greenLineSetWidth)

		this.setState({
			bonusSum,
			totalSum,
		})
	}

	getSum = (depositRate, percent, month) => {
		const totalPercent = percent * 0.01
		const sumDuringYear = Math.round(+depositRate * totalPercent)
		const sum = Math.round((sumDuringYear / 12) * month)

		return sum
	}

	// переделать
	getBonusSum = (depositRate, bonusPercent, month) => {
		const totalPercent = bonusPercent * 0.01
		const maxInterestAmount = 1000000

		let interestAmount = depositRate

		if (depositRate > maxInterestAmount) {
			interestAmount = maxInterestAmount
		}

		const sumDuringYear = Math.round(+interestAmount * totalPercent)
		const sum = Math.round((sumDuringYear / 12) * month)

		return sum
	}

	getSumFormat = sum => {
		let depositRateArr = sum.toString().split('').reverse()
		let indexsArr = []

		for (let i = 0; i < depositRateArr.length; i++) {
			if (i > 0 && i % 3 === 0) {
				indexsArr.push(i)
			}
		}

		for (let i = 0; indexsArr.length !== 0; i++) {
			depositRateArr.splice(indexsArr.pop(), 0, ' ')
		}

		return depositRateArr.reverse().join('')
	}

	getDate = () => {
		const { month } = this.state
		const monthArr = [
			'января',
			'февраля',
			'марта',
			'апреля',
			'мая',
			'июня',
			'июля',
			'августа',
			'сентября',
			'октября',
			'ноября',
			'декабря',
		]

		const dateNow = new Date()
		const dayNow = dateNow.getDate()
		const monthNow = dateNow.getMonth()
		const yearNow = dateNow.getFullYear()

		const depositDate = new Date(yearNow, monthNow + month, dayNow)
		const resultDay = depositDate.getDate()
		const resultMonth = depositDate.getMonth()
		const resultYear = depositDate.getFullYear()

		return 'к ' + resultDay + ' ' + monthArr[resultMonth] + ' ' + resultYear
	}

	getBonusPercent = transactionRate => {
		let bonusPercent = 0

		if (transactionRate >= 70000) {
			bonusPercent = 2.5
		} else if (transactionRate >= 50000) {
			bonusPercent = 2
		} else if (transactionRate >= 30000) {
			bonusPercent = 1.5
		} else if (transactionRate >= 15000) {
			bonusPercent = 1
		} else if (transactionRate >= 7000) {
			bonusPercent = 0.2
		} else {
			bonusPercent = 0
		}

		return bonusPercent
	}

	handleInputChange = event => {
		const { percent, month, transactionRate } = this.state
		const maxDepositRate = this.props
		const bonusPercent = this.getBonusPercent(transactionRate)

		let depositRate = +event.target.value

		if (isNaN(depositRate)) {
			return
		}

		if (depositRate > maxDepositRate * 100) {
			return
		}

		if (depositRate < 0) {
			return
		}

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			depositRate,
			bonusSum,
			totalSum,
		})
	}

	handleInputBlur = () => {
		const {
			bonusPercent,
			percent,
			month
		} = this.state
		const {
			minDepositRate,
			maxDepositRate
		} = this.props

		let depositRate = this.state.depositRate

		if (depositRate < minDepositRate) {
			depositRate = minDepositRate
		}

		if (depositRate > maxDepositRate) {
			depositRate = maxDepositRate
		}

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			depositRate,
			bonusSum,
			totalSum,
		})
	}

	handleInputRangeChange = depositRate => {
		const { bonusPercent, percent, month } = this.state
		const sum = this.getSum(depositRate[0], percent, month)
		const bonusSum = this.getBonusSum(depositRate[0], bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			depositRate: depositRate[0],
			bonusSum,
			totalSum,
		})
	}

	handleMonthClick = (month, percent) => () => {
		const { depositRate, bonusPercent } = this.state

		if (this.state.month === month) {
			return
		}

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			month,
			percent,
			bonusSum,
			totalSum,
		})
	}

	handleBonusInputChange = event => {
		const maxTransactionRate = 100000
		const transactionRate = +event.target.value

		if (isNaN(transactionRate)) {
			return
		}

		if (transactionRate > maxTransactionRate * 100) {
			return
		}

		if (transactionRate < 0) {
			return
		}

		const { percent, month, depositRate } = this.state
		const bonusPercent = this.getBonusPercent(transactionRate)
		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			transactionRate,
			bonusPercent,
			bonusSum,
			totalSum,
		})
	}

	handleBonusInputBlur = () => {
		const maxTransactionRate = 100000

		let { transactionRate } = this.state

		if (transactionRate > maxTransactionRate) {
			transactionRate = maxTransactionRate
		}

		this.setState({
			transactionRate,
		})
	}

	handleBonusInputRangeChange = transactionRate => {
		const { depositRate, percent, month } = this.state
		const bonusPercent = this.getBonusPercent(transactionRate[0])

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			transactionRate: transactionRate[0],
			bonusSum,
			totalSum,
			bonusPercent,
		})
	}

	handleActiveTariffClick = tariff => () => {
		this.props.actionSetTariff(tariff)
		this.greenLineSetWidth(tariff.id)
	}

	greenLineSetWidth = (activeTariff = null) => {
		let id = 1

		if (isNaN(activeTariff)) {
			id = this.props.activeTariff
		} else {
			id = activeTariff
		}

		const elem = document.querySelector(`.CalculatorTabs__text[data-id="${id}"]`)
		// console.log(document.querySelector(`.CalculatorTabs__text[data-id="${1}"`))
		const elemWidth = elem.offsetWidth
		const elemOffsetLeft = elem.offsetLeft
		const line = document.querySelector('.CalculatorTariffTabs__green-line')

		line.style.transform = `translateX(${elemOffsetLeft}px)`
		line.style.width = `${elemWidth}px`
	}

	render() {
		const {
			percent,
			bonusPercent,
			totalSum,
			depositRate,
			month,
			transactionRate,
		} = this.state
		const {
			tariffName,
			minDepositRate,
			maxDepositRate,
			deposit,
			activeTariff,
			tariffList
		} = this.props

		return (
			<Element name="Calculator">
				<section className="Calculator">
					<div className="container">
						<CalculatorTabsComponent
							activeTariff={activeTariff}
							tariffList={tariffList}
							handleActiveTariffClick={this.handleActiveTariffClick}
						/>
						<h2 className="title-h2 Calculator__title">
							Рассчитайте доход&nbsp;
							<span className="Calculator__title__inline">
								по накопительному счету
							</span>
						</h2>
						<PlusesList />
						<div className="Calculator__main">
							<div className="Calculator__left">
								{/* сумма депозита */}
								<CalculatorInput
									tariffName={tariffName}
									depositRate={depositRate}
									minDepositRate={minDepositRate}
									maxDepositRate={maxDepositRate}
									title={'Первоначальная сумма накопления'}
									getSumFormat={this.getSumFormat}
									handleInputBlur={this.handleInputBlur}
									handleInputChange={this.handleInputChange}
									handleChange={this.handleInputRangeChange}
								/>
								<CalculatorMonthTabs
									deposit={deposit}
									month={month}
									title={'Укажите срок накопления'}
									handleClick={this.handleMonthClick}
								/>
								<CalculatorBonusInput
									transactionRate={transactionRate}
									bonusPercent={bonusPercent}
									handleBonusInputChange={this.handleBonusInputChange}
									handleBonusInputBlur={this.handleBonusInputBlur}
									handleBonusInputRangeChange={this.handleBonusInputRangeChange}
								/>
							</div>
							<div className="Calculator__rigth">
								<CalculatorInfoPanel
									totalPercent={bonusPercent + percent}
									bonusSum={this.getSumFormat(totalSum)}
									finalSum={this.getSumFormat(totalSum + depositRate)}
									date={this.getDate()}
								/>
							</div>
						</div>
					</div>
				</section>
			</Element>
		)
	}
}

const mapStateToProps = state => ({
	tariffList: state.tariff.tariffList,
	minDepositRate: state.tariff.minDepositRate,
	maxDepositRate: state.tariff.maxDepositRate,
	deposit: state.tariff.deposit,
	activeTariff: state.tariff.activeTariff
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		actionSetTariff
	},
	dispatch
)

export default connect(mapStateToProps, mapDispatchToProps, null)(Calculator)
