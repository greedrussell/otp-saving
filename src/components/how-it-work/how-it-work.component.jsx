import React from 'react'

import './how-it-work.css'
import PdfSVG from '../../assets/img/pdf.svg'
import ChartDesktopPNG from '../../assets/img/how-it-work__desktop.png'
import ChartMobilePNG from '../../assets/img/how-it-work__mobile.png'

const HowItWork = () => (
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
					Ставки растут, в зависимости от суммы ежемесячных трат по карте «ОТП
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
					<img
						className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--mobile"
						src={ChartMobilePNG}
						alt=""
					/>
					<img
						className="HowItWork__middle__img-block__img HowItWork__middle__img-block__img--desktop"
						src={ChartDesktopPNG}
						alt=""
					/>
				</div>
			</div>
			<div className="HowItWork__bottom">
				<p className="HowItWork__bottom__text">
					Повышенная ставка начисляется на среднемесячный остаток по счёту,
					<span className="HowItWork__bottom__text__inline">
						не превышающий 350 000 рублей. Далее – начисление по базовой ставке
						4%
					</span>
				</p>
				<a href="#/" className="HowItWork__bottom__pdf-block">
					<img
						className="HowItWork__bottom__pdf-block__img"
						src={PdfSVG}
						alt="Иконка PDF файла"
					/>
					<p className="HowItWork__bottom__pdf-block__text">
						Правила по накопительному счету
					</p>
				</a>
			</div>
		</div>
	</section>
)

export default HowItWork