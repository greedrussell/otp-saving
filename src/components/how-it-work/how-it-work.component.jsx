import React from '../customer-info/node_modules/react'

import './how-it-work.css'

const HowItWork = () => (
	<section className="HowItWork">
		<div className="container">
			<h2 className="title-h2 HowItWork__title">
				Как работает накопительный счёт
			</h2>
			<p className="HowItWork__sub-title">
				Ставки растут, в зависимости от суммы ежемесячных трат по карте «ОТП
				Покупки»
			</p>
			<span className="HowItWork__text">Процент надбавки</span>
			<span className="HowItWork__text">Ставка с учетом надбавки</span>
			<span className="HowItWork__text">Сумма трат по карте </span>
		</div>
	</section>
)

export default HowItWork