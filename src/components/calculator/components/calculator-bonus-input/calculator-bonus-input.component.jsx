import React from 'react'

import './calculator-bonus-input.css'
import CalculatorRangeSlider from '../calculator-range/calculator-range.component'

const CalculatorBonusInput = ({
	transactionRate,
	handleBonusInputChange,
	handleBonusInputBlur,
	bonusPercent,
	handleBonusInputRangeChange,
}) => {
	const MIN = 0
	const MAX = 100000
	const STEP = 1000

	return (
		<div className="CalculatorBonusInput">
			<h3 className="Calculator__sub-title CalculatorBonusInput__title">
				Сумма покупок в месяц (необходима для повышенной ставки)
			</h3>
			<div className="CalculatorBonusInput__block">
				<input
					type="text"
					className="CalculatorBonusInput__input"
					placeholder=""
					value={transactionRate}
					onChange={handleBonusInputChange}
					onBlur={handleBonusInputBlur}
				/>
				<CalculatorRangeSlider
					min={MIN}
					max={MAX}
					step={STEP}
					rate={[transactionRate]}
					handleChange={handleBonusInputRangeChange}
				/>
				<div className="CalculatorBonusInput__bonus-info">
					<p className="CalculatorBonusInput__bonus-info__text">
						+ {bonusPercent.toString().replace('.', ',')}% к ставке
					</p>
				</div>
			</div>
		</div>
	)
}

export default CalculatorBonusInput
