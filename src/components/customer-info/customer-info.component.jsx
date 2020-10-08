import React from 'react'
import { Element } from 'react-scroll'
import { connect } from 'react-redux'

import './customer-info.css'
import CardPNG from '../../assets/img/customer-info.png'
import PDF from '../../assets/pdf/customer-info.pdf'
import PremiumPDF from '../../assets/pdf/customer-info--premium.pdf'
import PdfSVG from '../../assets/img/pdf.svg'

const CustomerInfoList = ({ tariffName }) => (
	<ul className="CustomerInfoList">
		<li className="CustomerInfoList__item">
			Обслуживание карты при выполнении условий &mdash;&nbsp;
			<p className="inline">
				<span className="CustomerInfoList__item__green">0 ₽</span>
			</p>
		</li>
		<li className="CustomerInfoList__item">
			Дополнительно&nbsp;
			{
				tariffName === 'Накопительный счет Premium' ? (
					<p className="inline">
						до&nbsp;
						<span className="CustomerInfoList__item__green">2%&nbsp;</span>
					</p>
				) : (
						<p className="inline">
							до&nbsp;
							<span className="CustomerInfoList__item__green">2,5%&nbsp;</span>
						</p>
					)
			}

			годовых&nbsp;
			<p className="inline">к ставке&nbsp;</p>
			<p className="inline">по накопительному счету</p>
		</li>
		<li className="CustomerInfoList__item">
			Снятие наличных&nbsp; <p className="inline">в банкоматах</p> любых банков
			без комиссии &mdash;&nbsp;<p className="inline">до 30 000 ₽</p>
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
							Бесплатная дебетовая карта
						</h2>
						<p className="CustomerInfo__text">
							Закажите карту «ОТП Покупки» (к накопительному счету)»&nbsp;
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
							<CustomerInfoList tariffName={this.props.tariffName} />
						</div>
						<div className="CustomerInfo__footer">
							{
								this.props.tariffName === 'Накопительный счет' ? (
									<a href={PDF} className="CustomerInfo__footer__block">
										<img
											className="CustomerInfo__footer__block__img"
											src={PdfSVG}
											alt="Иконка PDF файла"
										/>
										<div className="CustomerInfo__footer__block__text">
											Тарифы по карте
										</div>
									</a>
								) : (
										<a href={PremiumPDF} className="CustomerInfo__footer__block">
											<img
												className="CustomerInfo__footer__block__img"
												src={PdfSVG}
												alt="Иконка PDF файла"
											/>
											<div className="CustomerInfo__footer__block__text">
												Тарифы по карте Накопительный счет + Premium
											</div>
										</a>
									)
							}

						</div>
					</div>
				</section>
			</Element>
		)
	}
}

const matStateToProps = state => ({
	tariffName: state.tariff.tariffName
})

export default connect(matStateToProps, null, null)(CustomerInfo)
