import React from '../../../customer-info/node_modules/react'
import { Link } from '../../../customer-info/node_modules/react-scroll'

import './calculator-info-panel.css'

const CalculatorInfoPanel = ({
	date,
	totalPercent,
	bonusSum,
	finalSum,
	tariffName,
}) => {
	return (
		<div className="CalculatorInfoPanel">
			<h3 className="CalculatorInfoPanel__title">Сколько я заработаю</h3>
			<p className="CalculatorInfoPanel__date">{date}</p>
			<ul className="CalculatorInfoPanel__list">
				<li className="CalculatorInfoPanel__item">
					<p className="CalculatorInfoPanel__item__title">Доход по вкладу</p>
					<p className="CalculatorInfoPanel__item__text">{bonusSum} ₽</p>
				</li>
				<li className="CalculatorInfoPanel__item">
					<p className="CalculatorInfoPanel__item__title">Ставка</p>
					<p className="CalculatorInfoPanel__item__text">
						{+totalPercent.toFixed(2)} %
					</p>
				</li>
				<li className="CalculatorInfoPanel__item">
					<p className="CalculatorInfoPanel__item__title">Сумма к получению</p>
					<p className="CalculatorInfoPanel__item__text CalculatorInfoPanel__item__text--big">
						{finalSum} ₽
					</p>
				</li>
			</ul>
			<Link to="Form" smooth={true} duration={500}>
				<button className="btn btn--green CalculatorInfoPanel__btn">
					Открыть вклад
				</button>
			</Link>
			{tariffName === 'Пенсионный' && (
				<p className="CalculatorInfoPanel__info">
					Вклад может оформить любой клиент, предоставивший пенсионное
					удостоверение
				</p>
			)}
		</div>
	)
}

export default CalculatorInfoPanel
