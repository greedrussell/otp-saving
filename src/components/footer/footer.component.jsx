import React from 'react'

import './footer.css'
import LogoSVG from '../../assets/img/footer__logo.svg'
import FbSVG from '../../assets/img/footer__fb.svg'
import VkSVG from '../../assets/img/footer__vk.svg'
import InSVG from '../../assets/img/footer__in.svg'
import OkSVG from '../../assets/img/footer__ok.svg'
import AppleSVG from '../../assets/img/footer__mobile-app--apple.svg'
import GoogleSVG from '../../assets/img/footer__mobile-app--google.svg'

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

const SocialNetwork = () => (
	<ul className="SocialNetwork__list">
		<li className="SocialNetwork__item">
			<a href="/#" className="SocialNetwork__item__link">
				<img src={FbSVG} alt="" className="SocialNetwork__item__link__img" />
			</a>
		</li>
		<li className="SocialNetwork__item">
			<a href="/#" className="SocialNetwork__item__link">
				<img src={VkSVG} alt="" className="SocialNetwork__item__link__img" />
			</a>
		</li>
		<li className="SocialNetwork__item">
			<a href="/#" className="SocialNetwork__item__link">
				<img src={InSVG} alt="" className="SocialNetwork__item__link__img" />
			</a>
		</li>
		<li className="SocialNetwork__item">
			<a href="/#" className="SocialNetwork__item__link">
				<img src={OkSVG} alt="" className="SocialNetwork__item__link__img" />
			</a>
		</li>
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

const MobileApp = () => (
	<div className="Footer__middle__mobile-app">
		<h3 className="Footer__middle__mobile-app__title">Мобильный банк</h3>
		<div className="Footer__middle__mobile-app__block">
			<img className="Footer__middle__mobile-app__img" src={AppleSVG} alt="" />
			<img className="Footer__middle__mobile-app__img" src={GoogleSVG} alt="" />
		</div>
	</div>
)

const Footer = () => (
	<footer className="Footer">
		<div className="container">
			<div className="Footer__top">
				<Menu menu={MENU__LIST} />
			</div>
			<div className="Footer__middle">
				<div className="Footer__middle__left">
					<Contact />
					<SocialNetwork />
				</div>
				<div className="Footer__middle__rigth">
					<MobileApp />
				</div>
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
