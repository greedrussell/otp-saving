import React from 'react'
import { Element, Link } from 'react-scroll'

import './customer-info.css'
import CardPNG from '../../assets/img/customer-info.png'
import PdfSVG from '../../assets/img/pdf.svg'

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
			Дополнительно&nbsp;
			<p className="inline">
				до&nbsp;
				<span className="CustomerInfoList__item__green">2,5%&nbsp;</span>
			</p>
			годовых&nbsp;
			<p className="inline">к ставке</p>
			<p className="inline">по накопительному счету</p>
		</li>
		<li className="CustomerInfoList__item">
			Снятие наличных&nbsp; <p className="inline">в банкоматах</p> любых банков
			без комиссии —&nbsp;<p className="inline">до 30 000 ₽</p>
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
						<h2 className="title-h2 CustomerInfo__title">
							Бесплатная карта&nbsp;
							<span className="inline">с доставкой на дом</span>
						</h2>
						<p className="CustomerInfo__text">
							Закажите карту «ОТП Покупки» онлайн&nbsp;
							<span className="inline">
								и получайте повышенную ставку уже сейчас
							</span>
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
									Тарифы по карте
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* <Popup
					isActive={this.state.isActive}
					handleCloseClick={this.handleCloseClick}
				/> */}
			</Element>
		)
	}
}

export default CustomerInfo
