import React from 'react'
import { Link } from 'react-scroll'

import './hero-img.css'
import LogoSVG from '../../assets/img/logo.svg'
import ArrowSVG from '../../assets/img/hero-img__arrow.svg'

const HeroImgPluses = () => (
	<ul className="HeroImg__list">
		<li className="HeroImg__list__item">
			<img src={ArrowSVG} alt="" className="HeroImg__list__item__img" />
			<p className="HeroImg__list__item__text">До 6,5% годовых</p>
		</li>
		<li className="HeroImg__list__item">
			<img src={ArrowSVG} alt="" className="HeroImg__list__item__img" />
			<p className="HeroImg__list__item__text">
				Пополнение и снятие&nbsp;<span className="inline">без ограничений</span>
			</p>
		</li>
		<li className="HeroImg__list__item">
			<img src={ArrowSVG} alt="" className="HeroImg__list__item__img" />
			<p className="HeroImg__list__item__text">
				Акция «Будь в плюсе» — возможность получить
				<span className="inline">до 350 000 рублей</span>
			</p>
		</li>
	</ul>
)

const HeroImgNav = () => (
	<nav className="HeroImg__nav">
		<a href="/#" className="HeroImg__nav__link">
			<img
				src={LogoSVG}
				alt="OTP bank logo"
				className="HeroImg__nav__link__img"
			/>
		</a>
	</nav>
)

const HeroImg = () => (
	<section className="HeroImg">
		<div className="container">
			<HeroImgNav />
			<div className="HeroImg__wrapper">
				<h1 className="HeroImg__title">
					Повышаем процент&nbsp;
					<span className="HeroImg__title__inline">
						по накопительному счёту
					</span>
				</h1>
				<HeroImgPluses />
				<Link to="Form" smooth={true} duration={500}>
					<button className="HeroImg__btn btn btn--orange">Открыть счёт</button>
				</Link>
			</div>
		</div>
	</section>
)

export default HeroImg