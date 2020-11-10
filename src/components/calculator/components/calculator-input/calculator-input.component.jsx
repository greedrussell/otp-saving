import React from 'react'

import './calculator-input.css'
import CalculatorRangeSlider from '../calculator-range/calculator-range.component'
import { getSumFormat } from '../../../../helpers/calculator.helper'


// const spaces = getSumFormat(depositRate).length - depositRate.toString().length
// const spacePosition = Array.from(getSumFormat(depositRate).matchAll(/\s/g)).map(item => item.index)

// if (spacePosition.includes(symbol)) {
// 	console.log('space', spacePx)
// 	left += spacePx
// }
let left = 0
let lastCaretPosition = 0
let spaceCount = 0

const fakeCaret = depositRate => event => {
	const caretPosition = event.currentTarget.selectionStart
	const activeElem = document.querySelector('.CalculatorInput__input__text__line')
	const px = 8.65
	const spacePx = 3

	const reg = /\s/gi



	const result = depositRate.matchAll(reg)
	const spacePosition = Array.from(result).map(item => item.index + 1)


	if (lastCaretPosition > caretPosition) {
		left -= px
	}

	if (lastCaretPosition < caretPosition) {
		left += px
	}

	console.log(caretPosition)
	// not work
	if (lastCaretPosition < caretPosition) {
		console.log('left to rigth')
		if (spacePosition.indexOf(caretPosition) > -1) {
			console.log('space')
			left += spacePx
			spaceCount++
		}

		if (spaceCount < spacePosition.length) {
			console.log('spaceCount')
			left += spacePx
			spaceCount++
		}
	} else {
		console.log('rigth to left')
		if (spacePosition.indexOf(caretPosition + 1) > -1) {
			console.log('not space')
			left -= spacePx
		}
	}

	console.log(caretPosition, lastCaretPosition, left, spacePosition)

	lastCaretPosition = caretPosition
	activeElem.style.left = left + 'px'
}

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
					onKeyUp={fakeCaret(getSumFormat(depositRate))}
				/>
				<div className='CalculatorInput__input__text'>
					{getSumFormat(depositRate)}
					<span className='CalculatorInput__input__text__line'></span>
				</div>
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
