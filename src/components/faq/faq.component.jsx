import React from 'react'

import './faq.css'
import ArrowSVG from '../../assets/img/faq__arrow.svg'

const FAQ_LIST = [
	{
		id: 1,
		title: 'У меня уже есть карта ОТП Банка, могу я принять участие в акции?',
		text:
			'Для получения повышенного бонуса выпускается специальная бесплатная карта тарифа «ОТП Покупки (к накопительному счету)». Покупки по другим картам банка не учитываются.',
	},
	{
		id: 2,
		title: 'В какой срок начисляются проценты по накопительному счету?',
		text:
			'Проценты по базовой ставке выплачиваются ежемесячно в последний календарный день месяца. Бонус к ставке (за совершение покупок по карте) выплачивается ежемесячно, до 20 числа месяца, следующего за расчетным.',
	},
	{
		id: 3,
		title: 'На какой счет зачисляются проценты по накопительному счету?',
		text:
			'Проценты по базовой ставке начисляются на накопительный счет, бонус по ставке начисляется на счет карты «ОТП Покупки».',
	},
	{
		id: 4,
		title:
			'На какую сумму остатка на накопительном счете выплачивается повышенная ставка?',
		text:
			'Повышенная ставка начисляется на сумму остатка, не превышающую 350 000 рублей. Количество накопительных счетов при этом не ограничено.',
	},
]

const FaqItem = ({ title, text, id, hadnleClick, activeId }) => {
	return (
		<div className="FaqItem" data-id={id} onClick={hadnleClick}>
			<div
				className={
					activeId === id ? 'FaqItem__content active' : 'FaqItem__content'
				}>
				<h3 className="FaqItem__title">{title}</h3>
				<p className="FaqItem__text">{text}</p>
			</div>
			{activeId === id ? (
				<img src={ArrowSVG} alt="" className="FaqItem__img active" />
			) : (
				<img src={ArrowSVG} alt="" className="FaqItem__img" />
			)}
		</div>
	)
}

class Faq extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeId: 0,
		}
	}

	hadnleClick = event => {
		const activeId = this.state.activeId
		const id = +event.currentTarget.dataset.id

		this.setState({
			activeId: activeId === id ? 0 : id,
		})
	}

	render() {
		return (
			<section className="Faq">
				<div className="container">
					<div className="Faq__wrapper">
						<h2 className="title-h2 Faq__title">
							Вопросы&nbsp;
							<span className="Faq__title__inline">и ответы</span>
						</h2>
						<ul className="Faq__list">
							{FAQ_LIST.map(({ title, text, id }) => (
								<FaqItem
									title={title}
									text={text}
									key={id}
									id={id}
									activeId={this.state.activeId}
									hadnleClick={this.hadnleClick}
								/>
							))}
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Faq
