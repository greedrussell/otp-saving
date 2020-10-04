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
import actionSetTotalSum from '../../state/tariff/actions/set-total-sum.action'
import actionSetDepositRate from '../../state/tariff/actions/set-deposit-rate.action'
import actionSetMonth from '../../state/tariff/actions/set-month.action'
import actionSetBonusPercent from '../../state/tariff/actions/set-bonus-percent.action'
import {
	getDate,
	getSumFormat,
} from '../../helpers/calculator.helper'

class Calculator extends React.Component {
	componentDidMount() {
		const { bonusPercent, depositRate, percent, month, actionSetTotalSum } = this.props

		window.addEventListener("load", this.greenLineSetWidth)
		window.addEventListener("resize", this.greenLineSetWidth)

		actionSetTotalSum(depositRate, percent, bonusPercent, month)
	}

	handleInputChange = event => {
		const { actionSetDepositRate, percent, month, transactionRate } = this.props
		const depositRate = +event.target.value

		if (isNaN(depositRate)) {
			return
		}

		if (depositRate > this.props.maxDepositRate * 100) {
			return
		}

		if (depositRate < 0) {
			return
		}

		actionSetDepositRate(depositRate, transactionRate, percent, month)
	}

	handleInputBlur = () => {
		const {
			depositRate,
			minDepositRate,
			maxDepositRate,
			transactionRate,
			percent,
			month,
			actionSetDepositRate
		} = this.props

		let newDepositRate = depositRate

		if (newDepositRate < minDepositRate) {
			newDepositRate = minDepositRate
		}

		if (newDepositRate > maxDepositRate) {
			newDepositRate = maxDepositRate
		}

		actionSetDepositRate(
			newDepositRate,
			transactionRate,
			percent,
			month
		)
	}

	handleInputRangeChange = depositRate => {
		const { transactionRate, percent, month, actionSetDepositRate } = this.props

		actionSetDepositRate(
			depositRate[0],
			transactionRate,
			percent,
			month
		)
	}

	handleMonthClick = (newMonth, percent) => () => {
		const { depositRate, transactionRate, month, actionSetMonth } = this.props

		if (month === newMonth) {
			return
		}

		actionSetMonth(
			depositRate,
			transactionRate,
			percent,
			newMonth,
		)
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

		const { percent, month, depositRate, actionSetBonusPercent } = this.props

		actionSetBonusPercent(depositRate, transactionRate, percent, month)
	}

	handleBonusInputBlur = () => {
		const maxTransactionRate = 100000
		const { percent, month, depositRate, actionSetBonusPercent } = this.props

		let transactionRate = this.props.transactionRate

		if (transactionRate > maxTransactionRate) {
			transactionRate = maxTransactionRate
		}

		actionSetBonusPercent(depositRate, transactionRate, percent, month)
	}

	handleBonusInputRangeChange = transactionRate => {
		const { depositRate, percent, month, actionSetBonusPercent } = this.props

		actionSetBonusPercent(
			depositRate,
			transactionRate[0],
			percent,
			month,
		)
	}

	handleActiveTariffClick = tariff => () => {
		const { actionSetTariff, depositRate, transactionRate } = this.props

		actionSetTariff(tariff, depositRate, transactionRate)

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
		const elemWidth = elem.offsetWidth
		const elemOffsetLeft = elem.offsetLeft
		const line = document.querySelector('.CalculatorTariffTabs__green-line')

		line.style.transform = `translateX(${elemOffsetLeft}px)`
		line.style.width = `${elemWidth}px`
	}

	render() {
		const {
			tariffName,
			minDepositRate,
			maxDepositRate,
			deposit,
			activeTariff,
			tariffList,
			bonusPercent,
			percent,
			totalSum,
			month,
			depositRate,
			transactionRate
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
									getSumFormat={getSumFormat}
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
									bonusSum={getSumFormat(totalSum)}
									finalSum={getSumFormat(totalSum + depositRate)}
									date={getDate(month)}
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
	activeTariff: state.tariff.activeTariff,
	tariffName: state.tariff.tariffName,
	deposit: state.tariff.deposit,
	minDepositRate: state.tariff.minDepositRate,
	maxDepositRate: state.tariff.maxDepositRate,
	month: state.tariff.month,
	depositRate: state.tariff.depositRate,
	transactionRate: state.tariff.transactionRate,
	percent: state.tariff.percent,
	bonusPercent: state.tariff.bonusPercent,
	totalSum: state.tariff.totalSum,
	tariffList: state.tariff.tariffList,
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		actionSetTariff,
		actionSetTotalSum,
		actionSetDepositRate,
		actionSetMonth,
		actionSetBonusPercent
	},
	dispatch
)

export default connect(mapStateToProps, mapDispatchToProps, null)(Calculator)
