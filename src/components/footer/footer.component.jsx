import React from '../customer-info/node_modules/react'

import './footer.css'
import LogoSVG from '../../assets/img/footer__logo.svg'

const MENU__LIST = [
	{
		id: 1,
		title: 'Офисы',
		link: 'https://www.otpbank.ru/retail/branches/',
	},
	{
		id: 2,
		title: 'Банкоматы',
		link: 'https://www.otpbank.ru/about/',
	},
	{
		id: 3,
		title: 'О банке',
		link: 'https://www.otpbank.ru/about/',
	},
	{
		id: 4,
		title: 'Интернет-банк',
		link: 'https://online.otpbank.ru/login/product-auth',
	},
]

const Menu = ({ menu }) => (
	<ul className="FooterMenu">
		{menu.map(item => (
			<li className="FooterMenu__item" key={item.id}>
				<a href={item.link} className="FooterMenu__item__link">
					{item.title}
				</a>
			</li>
		))}
	</ul>
)

const Contact = () => (
	<div className="Contact">
		<p className="Contact__title">Свяжитесь с нами</p>
		<a href="tel:+74957754775" className="Contact__link">
			+7 (495) 775 47 75
		</a>
		<a href="tel:+78002007004" className="Contact__link">
			8 800 200 70 04
		</a>
	</div>
)

const Footer = () => (
	<footer className="Footer">
		<div className="Footer__top">
			<div className="container">
				<Menu menu={MENU__LIST} />
				<Contact />
			</div>
		</div>
		<div className="Footer__bottom">
			<div className="container">
				<div className="Footer__bottom__wrapper">
					<img
						src={LogoSVG}
						alt="Логотип ОТП Банка"
						className="Footer__bottom__img"
					/>
					<p className="Footer__bottom__text">
						Генеральная лицензия Банка России №2766 от 27.11.2014 г.
					</p>
					<p className="Footer__bottom__copyright">
						© Copyright 2019. OTP Bank
					</p>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
