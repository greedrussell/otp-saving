import React from 'react'
import { Link } from 'react-scroll'

import './about-action.css'
import CardSVG from '../../assets/img/about-action__card.svg'
import BoxSVG from '../../assets/img/about-action__box.svg'
import PercentSVG from '../../assets/img/about-action__percent.svg'
import OnePNG from '../../assets/img/about-action__one.png'
import TwoPNG from '../../assets/img/about-action__two.png'
import ThreePNG from '../../assets/img/about-action__three.png'

const AboutActionItem = ({
	textComponent,
	imgUrl,
	children,
	numberImgUrl,
	index,
}) => (
		<div className="AboutActionItem">
			<div className="AboutActionItem__wrapper">
				<img src={imgUrl} alt="" className="AboutActionItem__img" />
				{children}
				<div className={`AboutActionItem__bg AboutActionItem__bg--${index}`}>
					<img src={numberImgUrl} alt="" className="AboutActionItem__bg__img" />
				</div>
			</div>
			{textComponent}
		</div>
	)

const AboutAction = () => (
	<section className="AboutAction">
		<div className="container">
			<h2 className="title-h2 AboutAction__title">
				Как получить повышенную ставку
			</h2>
			<div className="AboutAction__list">
				<AboutActionItem
					textComponent={
						<p className="AboutActionItem__text">
							и получите{' '}
							<Link to="CustomerInfo" smooth={true} duration={500}>
								<span className="AboutActionItem__text-green">
									карту «ОТП Покупки»&nbsp;
								</span>
							</Link>
							. Карту можно оформить в отделении банка
						</p>
					}
					imgUrl={CardSVG}
					numberImgUrl={OnePNG}
					index={0}>
					<h3 className="title-h3 AboutActionItem__title">
						Откройте&nbsp;
						<span className="AboutActionItem__title__inline">
							накопительный счёт
						</span>
					</h3>
				</AboutActionItem>
				<AboutActionItem
					textComponent={
						<p className="AboutActionItem__text">
							От 15 000 рублей в месяц
						</p>
					}
					imgUrl={PercentSVG}
					numberImgUrl={TwoPNG}
					index={1}>
					<h3 className="title-h3 AboutActionItem__title">
						Совершайте покупки&nbsp;
						<span className="AboutActionItem__title__inline"> по карте</span>
					</h3>
				</AboutActionItem>
				<AboutActionItem
					textComponent={
						<p className="AboutActionItem__text">
							Дополнительно до 2.5% к ставке счета
						</p>
					}
					imgUrl={BoxSVG}
					numberImgUrl={ThreePNG}
					index={2}>
					<h3 className="title-h3 AboutActionItem__title">
						Получайте&nbsp;
						<span className="AboutActionItem__title__inline">призы</span>
					</h3>
				</AboutActionItem>
			</div>
		</div>
	</section>
)

export default AboutAction
