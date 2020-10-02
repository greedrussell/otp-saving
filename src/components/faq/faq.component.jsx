import React from 'react'
import { Element } from 'react-scroll'
import { connect } from 'react-redux'

import './faq.css'
import ArrowSVG from '../../assets/img/faq__arrow.svg'

const FaqItem = ({ title, children, id, hadnleClick, activeId }) => {
	return (
		<div className="FaqItem" data-id={id} onClick={hadnleClick}>
			<div
				className={
					activeId === id ? 'FaqItem__content active' : 'FaqItem__content'
				}>
				<h3 className="FaqItem__title">{title}</h3>
				<p className="FaqItem__text">{children}</p>
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
			<Element name="Faq">
				<section className="Faq">
					<div className="container">
						<div className="Faq__wrapper">
							<h2 className="title-h2 Faq__title">
								Вопросы&nbsp;
								<span className="Faq__title__inline">и ответы</span>
							</h2>
							<ul className="Faq__list">
								<FaqItem
									title={'У меня уже есть карта ОТП Банка, могу я принять участие в акции?'}
									id={1}
									activeId={this.state.activeId}
									hadnleClick={this.hadnleClick}
								>
									{'Для получения повышенного бонуса выпускается специальная бесплатная карта тарифа «ОТП Покупки (к накопительному счету)». Покупки по другим картам банка не учитываются.'}
								</FaqItem>
								<FaqItem
									title={'В какой срок начисляются проценты по накопительному счету?'}
									id={2}
									activeId={this.state.activeId}
									hadnleClick={this.hadnleClick}
								>
									{'Проценты по базовой ставке выплачиваются ежемесячно в последний календарный день расчетного месяца. Бонус к ставке за совершение покупок по карте выплачивается ежеквартально, до последнего календарного дня месяца, следующего за месяцем окончания квартала.'}
								</FaqItem>
								<FaqItem
									title={'На какой счет зачисляются проценты по накопительному счету?'}
									id={3}
									activeId={this.state.activeId}
									hadnleClick={this.hadnleClick}
								>
									{'Проценты по базовой ставке начисляются на накопительный счет, бонус по ставке начисляется на счет карты «ОТП Покупки».'}
								</FaqItem>
								<FaqItem
									title={'На какую сумму остатка на накопительном счете выплачивается повышенная ставка?'}
									id={4}
									activeId={this.state.activeId}
									hadnleClick={this.hadnleClick}
								>
									{this.props.tariffName === 'Накопительный счет Premium' ? 'Повышенная ставка начисляется на сумму остатка, не превышающую 1 000 000 рублей. Количество накопительных счетов при этом не ограничено.' : 'Повышенная ставка начисляется на сумму остатка, не превышающую 350 000 рублей. Количество накопительных счетов при этом не ограничено.'}
								</FaqItem>
							</ul>
						</div>
					</div>
				</section>
			</Element>
		)
	}
}

const mapStateToProps = state => ({
	tariffName: state.tariff.tariffName
})

export default connect(mapStateToProps, null, null)(Faq)
