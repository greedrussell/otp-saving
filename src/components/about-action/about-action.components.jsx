import React from '../customer-info/node_modules/react'

import './about-action.css'
import CardSVG from '../../assets/img/about-action__card.svg'
import BasketSVG from '../../assets/img/about-action__basket.svg'
import PercentSVG from '../../assets/img/about-action__percent.svg'
import OnePNG from '../../assets/img/about-action__one.png'
import TwoPNG from '../../assets/img/about-action__two.png'
import ThreePNG from '../../assets/img/about-action__three.png'

const ABOUT_ACTION_LIST = [
	{
		id: 1,
		title: 'Откройте вклад',
		text:
			'сроком от 3-х месяцев и получите карту «ОТП Покупки» с доходом на остаток 4%',
		imgUrl: CardSVG,
		numberImgUrl: OnePNG,
	},
	{
		id: 2,
		title: 'Совершайте покупки',
		text: 'от 7000 рублей  в месяц по карте',
		imgUrl: BasketSVG,
		numberImgUrl: TwoPNG,
	},
	{
		id: 3,
		title: 'Получайте бонус',
		text: 'дополнительно до 0,5% годовых к ставке по вкладу',
		imgUrl: PercentSVG,
		numberImgUrl: ThreePNG,
	},
]

const AboutActionItem = ({ title, imgUrl, text, numberImgUrl, index }) => (
	<div className="AboutActionItem">
		<div className="AboutActionItem__wrapper">
			<img src={imgUrl} alt="" className="AboutActionItem__img" />
			<h3 className="title-h3 AboutActionItem__title">{title}</h3>
			<div className={`AboutActionItem__bg AboutActionItem__bg--${index}`}>
				<img src={numberImgUrl} alt="" className="AboutActionItem__bg__img" />
			</div>
		</div>
		<p className="AboutActionItem__text">{text}</p>
	</div>
)

const AboutAction = () => (
	<section className="AboutAction">
		<div className="container">
			<h2 className="title-h2 AboutAction__title">
				Как получить повышенную ставку
			</h2>
			<div className="AboutAction__list">
				{ABOUT_ACTION_LIST.map((actionItem, index) => (
					<AboutActionItem
						title={actionItem.title}
						text={actionItem.text}
						imgUrl={actionItem.imgUrl}
						numberImgUrl={actionItem.numberImgUrl}
						index={index}
						key={actionItem.id}
					/>
				))}
			</div>
		</div>
	</section>
)

export default AboutAction
