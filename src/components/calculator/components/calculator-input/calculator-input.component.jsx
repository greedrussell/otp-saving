import React from 'react'

import './calculator-input.css'
import CalculatorRangeSlider from '../calculator-range/calculator-range.component'

const CalculatorInput = ({
	depositRate,
	minDepositRate,
	maxDepositRate,
	handleChange,
	handleInputBlur,
	handleInputChange,
	getSumFormat,
	title = '',
}) => {
	if (!minDepositRate || !maxDepositRate) {
		return null
	}

	const STEP = 10000

	return (
		<div className="CalculatorInput">
			<h3 className="Calculator__sub-title CalculatorInput__title">{title}</h3>
			<div className="CalculatorInput__block">
				<input
					type="text"
					className="CalculatorInput__input"
					placeholder=""
					value={depositRate}
					onChange={handleInputChange}
					onBlur={handleInputBlur}
				/>
				<CalculatorRangeSlider
					min={minDepositRate}
					max={maxDepositRate}
					rate={[depositRate]}
					step={STEP}
					handleChange={handleChange}
				/>
			</div>
			<div className="CalculatorInput__info">
				<div className="CalculatorInput__info__text">
					от {getSumFormat(minDepositRate)} ₽
				</div>
				<div className="CalculatorInput__info__text">
					до {getSumFormat(maxDepositRate)} ₽
				</div>
			</div>
		</div>
	)
}

export default CalculatorInput
