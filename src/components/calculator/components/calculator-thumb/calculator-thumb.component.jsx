import React from 'react'

import LeftArrowSVG from '../../../../assets/img/calculator__left-arrow.svg'
import RigthArrowSVG from '../../../../assets/img/calculator__right-arrow.svg'
import './calculator-thumb.css'

const CalculatorThump = ({ props }) => (
	<div className="CalculatorThump" {...props}>
		<img src={LeftArrowSVG} alt="" className="CalculatorThump__left-arrow" />
		<img src={RigthArrowSVG} alt="" className="CalculatorThump__rigth-arrow" />
	</div>
)

export default CalculatorThump
