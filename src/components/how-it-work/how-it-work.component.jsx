import React from 'react'
import { connect } from 'react-redux'

import './how-it-work.css'
import PdfSVG from '../../assets/img/pdf.svg'
import ChartDesktopPNG from '../../assets/img/how-it-work__desktop.png'
import ChartDesktopPremiumPNG from '../../assets/img/how-it-work__desktop--premium.png'
import ChartMobilePremiumPNG from '../../assets/img/how-it-work__mobile--premium.png'
import ChartMobilePNG from '../../assets/img/how-it-work__mobile.png'
import PDF from '../../assets/pdf/how-it-work.pdf'
import PremiumPDF from '../../assets/pdf/how-it-work--premium.pdf'

const HowItWork = ({ tariffName }) => (
	<section className="HowItWork">
		<div className="container">
			<div className="HowItWork__top">
				<h2 className="title-h2 HowItWork__top__title">
					Как работает&nbsp;
					<span className="HowItWork__top__title__inline">
						накопительный счёт
					</span>
				</h2>
				<p className="HowItWork__top__sub-title">
					Ставки растут в зависимости от суммы ежемесячных трат по карте «ОТП
					Покупки»
				</p>
			</div>
			<div className="HowItWork__middle">
				<div className="HowItWork__middle__content">
					<span className="HowItWork__middle__content__text">
						Процент надбавки
					</span>
					<span className="HowItWork__middle__content__text">
						Ставка с учетом надбавки
					</span>
					<span className="HowItWork__middle__content__text">
						Сумма трат по карте
					</span>
				</div>
				<div className="HowItWork__middle__img-block">
					{
						tariffName === 'Накопительный счет Premium' ? (
							<img
								className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--mobile"
								src={ChartMobilePremiumPNG}
								alt=""
							/>
						) : (
								<img
									className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--mobile"
									src={ChartMobilePNG}
									alt=""
								/>
							)
					}
					{
						tariffName === 'Накопительный счет Premium' ? (
							<img
								className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--desktop"
								src={ChartDesktopPremiumPNG}
								alt=""
							/>
						) : (
								<img
									className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--desktop"
									src={ChartDesktopPNG}
									alt=""
								/>
							)
					}

				</div>
			</div>
			<div className="HowItWork__bottom">
				<p className="HowItWork__bottom__text">
					Повышенная ставка начисляется на среднемесячный остаток по
					счёту,&nbsp;
					<span className="HowItWork__bottom__text__inline">
						не превышающий {
							tariffName === 'Накопительный счет Premium' ? '1 000 000 рублей' : '350 000 рублей'
						} . Далее &mdash; начисление по базовой
						ставке 4%
					</span>
				</p>
				{
					tariffName === 'Накопительный счет Premium' ? (
						<a href={PremiumPDF} className="HowItWork__bottom__pdf-block">
							<img
								className="HowItWork__bottom__pdf-block__img"
								src={PdfSVG}
								alt="Иконка PDF файла"
							/>
							<p className="HowItWork__bottom__pdf-block__text">
								Правила по накопительному счету + Premium
							</p>
						</a>
					) : (
							<a href={PDF} className="HowItWork__bottom__pdf-block">
								<img
									className="HowItWork__bottom__pdf-block__img"
									src={PdfSVG}
									alt="Иконка PDF файла"
								/>
								<p className="HowItWork__bottom__pdf-block__text">
									Подробные Правила программы
							</p>
							</a>
						)
				}
			</div>
		</div>
	</section>
)

const mapStateToProps = state => ({
	tariffName: state.tariff.tariffName
})

export default connect(mapStateToProps, null, null)(HowItWork)
