import React from 'react'
import { Link } from 'react-scroll'

import './hero-img.css'
import LogoSVG from '../../assets/img/logo.svg'
import LogoScrollSVG from '../../assets/img/nav__logo--scroll.svg'
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

const HeroImgNav = ({ isScroll }) => (
	<nav className={isScroll ? 'HeroImg__nav scroll' : 'HeroImg__nav'}>
		<div className="container">
			<div className="HeroImg__nav__wrapper">
				<a href="/#" className="HeroImg__nav__link">
					<img
						src={LogoSVG}
						alt="OTP bank logo"
						className="HeroImg__nav__link__img"
					/>

					<img
						src={LogoScrollSVG}
						alt="OTP bank logo"
						className="HeroImg__nav__link__img HeroImg__nav__link__img--scroll"
					/>
				</a>
				<ul className="HeroImg__nav__list">
					<li className="HeroImg__nav__item">
						<a className="HeroImg__nav__item__link" href="/#">
							Рассчитать доход
						</a>
					</li>
					<li className="HeroImg__nav__item">
						<a className="HeroImg__nav__item__link" href="/#">
							Вопросы и ответы
						</a>
					</li>
					<li className="HeroImg__nav__item">
						<a href="/#" className="btn btn--green btn--small">
							Открыть счет
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)

class HeroImg extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isScroll: false,
		}
	}

	handleScroll = event => {
		const offsetTop = window.pageYOffset

		if (window.innerWidth >= 768) {
			if (offsetTop === 0) {
				this.setState({
					isScroll: false,
				})
			} else {
				this.setState({
					isScroll: true,
				})
			}
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	render() {
		const isScroll = this.state.isScroll

		return (
			<section className="HeroImg">
				<HeroImgNav isScroll={isScroll} />
				<div className="container">
					<div className="HeroImg__wrapper">
						<h1 className="HeroImg__title">
							Повышаем процент&nbsp;
							<span className="HeroImg__title__inline">
								по накопительному счёту
							</span>
						</h1>
						<HeroImgPluses />
						<Link
							to="Form"
							smooth={true}
							duration={500}
							className="HeroImg__btn-link">
							<button className="HeroImg__btn btn btn--orange">
								Открыть счёт
							</button>
						</Link>
					</div>
				</div>
			</section>
		)
	}
}

export default HeroImg