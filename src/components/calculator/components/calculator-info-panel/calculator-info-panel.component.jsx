import React from 'react'

import './calculator-info-panel.css'

const CalculatorInfoPanel = ({ date, totalPercent, bonusSum, finalSum }) => {
	return (
		<div className="CalculatorInfoPanel">
			<h3 className="CalculatorInfoPanel__title">Сколько я заработаю</h3>
			<p className="CalculatorInfoPanel__date">{date}</p>
			<ul className="CalculatorInfoPanel__list">
				<li className="CalculatorInfoPanel__item">
					<p className="CalculatorInfoPanel__item__title">Доход по счету</p>
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
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://cards.otpbank.ru/debit/deposit-claim/?_ga=2.193274602.614762482.1597646882-974556188.1594278884"
				className="btn btn--green CalculatorInfoPanel__btn">
				Открыть счет
			</a>
		</div>
	)
}

export default CalculatorInfoPanel
