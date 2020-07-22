import React from '../customer-info/node_modules/react'

import './hero-img.css'

const HeroImgPluses = () => (
	<ul className="HeroImgPluses">
		<li className="HeroImgPluses__item">
			<img src="" alt="icon" />
			<p>До 6,5% годовых</p>
		</li>
		<li className="HeroImgPluses__item">
			<img src="" alt="icon" />
			<p>До 6,5% годовых</p>
		</li>
		<li className="HeroImgPluses__item">
			<img src="" alt="icon" />
			<p>До 6,5% годовых</p>
		</li>
		<li className="HeroImgPluses__item">
			<img src="" alt="icon" />
			<p>До 6,5% годовых</p>
		</li>
	</ul>
)

const HeroImgNav = () => (
	<nav className="HeroImgNav">
		<a href="/#">
			<img src="" alt="OTP bank logo" />
		</a>
	</nav>
)

const HeroImg = () => (
	<section className="HeroImg">
		<div className="container">
			<HeroImgNav />
			<h1 className="HeroImg__title">
				Повышаем процент по накопительному счёту
			</h1>
			<HeroImgPluses />
			<button className="HeroImg__btn btn btn--orange">Открыть счёт</button>
		</div>
	</section>
)

export default HeroImg