import React from 'react'
import { Element, Link } from 'react-scroll'

import './customer-info.css'
import './customer-info-list.css'
import CardPNG from '../../assets/img/customer-info.png'
import PdfSVG from '../../assets/img/pdf.svg'
import Popup from '../popup/popup.component'

const CustomerInfoList = () => (
	<ul className="CustomerInfoList">
		<li className="CustomerInfoList__item">
			Выпуск и обслуживание&nbsp;
			<p className="inline">
				карты —&nbsp;
				<span className="CustomerInfoList__item__green">0 ₽</span>
			</p>
		</li>
		<li className="CustomerInfoList__item">
			Ежемесячный доход&nbsp;
			<p className="inline">
				на остаток —&nbsp;
				<span className="CustomerInfoList__item__green">4%</span>
			</p>
		</li>
		<li className="CustomerInfoList__item">
			Плюс&nbsp;
			<span className="CustomerInfoList__item__green">0,25%&nbsp;</span>к ставке
			вклада при тратах&nbsp;
			<p className="inline">7 000 ₽ в месяц по карте </p>
			<br />
			Плюс&nbsp;
			<span className="CustomerInfoList__item__green">0,5%&nbsp;</span>к ставке
			вклада при тратах&nbsp;
			<p className="inline">15 000 ₽ в месяц по карте</p>
		</li>
		<li className="CustomerInfoList__item">
			Снятие наличных в банкоматах любых банков&nbsp;
			<p className="inline">без комиссии — до 30 000 ₽&nbsp;</p>
		</li>
	</ul>
)

class CustomerInfo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isActive: false,
		}
	}

	handleOpenClick = () => {
		const body = document.querySelector('body')

		body.classList.add('active')

		this.setState({
			isActive: true,
		})
	}

	handleCloseClick = () => {
		const body = document.querySelector('body')

		body.classList.remove('active')

		this.setState({
			isActive: false,
		})
	}

	render() {
		return (
			<Element name="CustomerInfo">
				<section className="CustomerInfo">
					<div className="container">
						<h2 className="title-h2 CustomerInfo__title">Уже есть вклад?</h2>
						<p className="CustomerInfo__text">
							Прекрасно. Просто закажите карту «ОТП Покупки» на дом и получайте
							повышенную ставку уже сейчас.
						</p>
						<div className="CustomerInfo__main">
							<div className="CustomerInfo__img-block">
								<img
									className="CustomerInfo__img-block__img"
									src={CardPNG}
									alt="Карта ОПТ покупки"
								/>
							</div>
							<CustomerInfoList />
						</div>
						<div className="CustomerInfo__footer">
							<Link to="Form" smooth={true} duration={500}>
								<button className="btn btn--green">Заказать карту</button>
							</Link>
							<div className="CustomerInfo__footer__block">
								<img
									className="CustomerInfo__footer__block__img"
									src={PdfSVG}
									alt="Иконка PDF файла"
								/>
								<a
									href="https://www.otpbank.ru/f/documents/cards/debet-cards/pravila-cash-deposit.pdf"
									className="CustomerInfo__footer__block__text">
									Полные условия по карте
								</a>
							</div>
						</div>
					</div>
				</section>
				<Popup
					isActive={this.state.isActive}
					handleCloseClick={this.handleCloseClick}
				/>
			</Element>
		)
	}
}

export default CustomerInfo
