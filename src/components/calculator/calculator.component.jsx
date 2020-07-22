import React from '../customer-info/node_modules/react'

import './calculator.css'
import CalculatorTariffTabs from './components/calculator-tariff-tabs/calculator-tariff-tabs.component'
import CalculatorInfoPanel from './components/calculator-info-panel/calculator-info-panel.component'
import CalculatorInput from './components/calculator-input/calculator-input.component'
import CalculatorMonthTabs from './components/calculator-month-tabs/calculator-month-tabs.component'
import CalculatorBonusInput from './components/calculator-bonus-input/calculator-bonus-input.component'

const TARIFF_LIST = [
	{
		id: 1,
		name: 'Пенсионный',
		deposit: [
			{
				id: 1,
				month: 3,
				percent: 3.9,
				title: '3 месяца',
				subTitle: '3.9% годовых',
			},
			{
				id: 2,
				month: 6,
				percent: 4.4,
				title: '6 месяцев',
				subTitle: '4,4% годовых',
			},
			{
				id: 3,
				month: 12,
				percent: 4.1,
				title: '1 год',
				subTitle: '4,1% годовых',
			},
		],
		minDepositRate: 15000,
		maxDepositRate: 10000000,
	},
	{
		id: 2,
		name: 'Максимальный',
		deposit: [
			{
				id: 1,
				month: 3,
				percent: 3.8,
				title: '3 месяца',
				subTitle: '3.8% годовых',
			},
			{
				id: 2,
				month: 6,
				percent: 4.5,
				title: '6 месяцев',
				subTitle: '4,5% годовых',
			},
			{
				id: 4,
				month: 12,
				percent: 4,
				title: '1 год',
				subTitle: '4% годовых',
			},
		],
		minDepositRate: 30000,
		maxDepositRate: 30000000,
	},
]

class Calculator extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTariff: 0,
			tariffName: '',
			deposit: [],
			minDepositRate: 0,
			maxDepositRate: 0,
			// для подсчета дохода
			month: 0,
			depositRate: 300000,
			transactionRate: 15000,
			percent: 0,
			bonusPercent: 0.5,
			// finaly data
			bonusSum: 0,
			totalSum: 0,
		}
	}

	componentDidMount() {
		const tariff = TARIFF_LIST[0]
		const tariffData = this.getActiveTariff(tariff)
		const { bonusPercent, depositRate } = this.state
		const sum = this.getSum(depositRate, tariffData.percent, tariffData.month)
		const bonusSum = this.getBonusSum(
			depositRate,
			bonusPercent,
			tariffData.month
		)
		const totalSum = sum + bonusSum

		window.addEventListener('load', this.greenLineSetWidth)
		window.addEventListener('resize', this.greenLineSetWidth)

		this.setState({
			...tariffData,
			bonusSum,
			totalSum,
		})
	}

	getActiveTariff = tariff => {
		const {
			deposit,
			minDepositRate,
			maxDepositRate,
			id: activeTariff,
			name: tariffName,
		} = tariff

		return {
			tariffName,
			activeTariff,
			deposit,
			minDepositRate,
			maxDepositRate,
			percent: deposit[0].percent,
			month: deposit[0].month,
		}
	}

	getSum = (depositRate, percent, month) => {
		const totalPercent = percent * 0.01
		const sumDuringYear = Math.round(+depositRate * totalPercent)
		const sum = Math.round((sumDuringYear / 12) * month)

		return sum
	}

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

		if (transactionRate >= 15000) {
			bonusPercent = 0.5
		} else if (transactionRate >= 7000) {
			bonusPercent = 0.2
		} else {
			bonusPercent = 0
		}

		return bonusPercent
	}

	handleInputChange = event => {
		const { percent, month, maxDepositRate, transactionRate } = this.state
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
			month,
			minDepositRate,
			maxDepositRate,
		} = this.state

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

	handleActiveTariffClick = activeTariff => () => {
		const { bonusPercent, activeTariff: oldActiveTariff } = this.state

		let depositRate = this.state.depositRate

		if (oldActiveTariff === activeTariff) {
			return
		}

		const tariffData = this.getActiveTariff(TARIFF_LIST[activeTariff - 1])
		const { percent, month, minDepositRate, maxDepositRate } = tariffData

		if (depositRate < minDepositRate) {
			depositRate = minDepositRate
		}

		if (depositRate > maxDepositRate) {
			depositRate = maxDepositRate
		}

		this.greenLineSetWidth(activeTariff)

		const sum = this.getSum(depositRate, percent, month)
		const bonusSum = this.getBonusSum(depositRate, bonusPercent, month)
		const totalSum = sum + bonusSum

		this.setState({
			...tariffData,
			activeTariff,
			bonusSum,
			totalSum,
			depositRate,
		})
	}

	greenLineSetWidth = (activeTariff = null) => {
		let id = 0

		if (isNaN(activeTariff)) {
			id = this.state.activeTariff
		} else {
			id = activeTariff
		}

		const elem = document.querySelector(
			`.CalculatorTariffTabs__item[data-id="${id}"]`
		)
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
			tariffName,
			depositRate,
			minDepositRate,
			maxDepositRate,
			deposit,
			month,
			transactionRate,
			activeTariff,
		} = this.state

		return (
			<section className="Calculator">
				<div className="container">
					<h2 className="title-h2 Calculator__title">
						Рассчитайте доход по вкладу
					</h2>
					<CalculatorTariffTabs
						tariffList={TARIFF_LIST}
						activeTariff={activeTariff}
						tariffName={tariffName}
						handleActiveTariffClick={this.handleActiveTariffClick}
					/>
					<div className="Calculator__main">
						<div className="Calculator__left">
							{/* сумма депозита */}
							<CalculatorInput
								tariffName={tariffName}
								depositRate={depositRate}
								minDepositRate={minDepositRate}
								maxDepositRate={maxDepositRate}
								getSumFormat={this.getSumFormat}
								handleInputBlur={this.handleInputBlur}
								handleInputChange={this.handleInputChange}
								handleChange={this.handleInputRangeChange}
							/>
							<CalculatorMonthTabs
								deposit={deposit}
								month={month}
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
								tariffName={tariffName}
								date={this.getDate()}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Calculator
