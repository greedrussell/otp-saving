import React from 'react'
import { Range, getTrackBackground } from 'react-range'

import './calculator-range.css'
import CalculatorThump from '../calculator-thumb/calculator-thumb.component'

class CalculatorRangeSlider extends React.Component {
	shouldComponentUpdate(nextProps) {
		if (nextProps.rate > nextProps.max) {
			return false
		}

		return true
	}

	render() {
		const { rate, handleChange, min, max, step } = this.props

		return (
			<div className="CalculatorRangeSlider">
				<Range
					step={step}
					min={min}
					max={max}
					values={rate}
					onChange={handleChange}
					renderTrack={({ props, children }) => (
						<div
							onMouseDown={props.onMouseDown}
							onTouchStart={props.onTouchStart}
							className="CalculatorTrack">
							<div
								className="CalculatorTrack__line"
								ref={props.ref}
								style={{
									background: getTrackBackground({
										values: rate,
										colors: ['#52AE30', '#B8B8B8'],
										min,
										max,
									}),
								}}>
								{children}
							</div>
						</div>
					)}
					renderThumb={CalculatorThump}
				/>
			</div>
		)
	}
}

export default CalculatorRangeSlider
