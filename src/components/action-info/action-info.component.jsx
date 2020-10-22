import React from 'react'

import './action-info.css'
import ArrowDownSVG from '../../assets/img/action-info__arrow-down.svg'
import ArrowUpSVG from '../../assets/img/action-info__arrow-up.svg'
// import GirlPNG from '../../assets/img/action-info__girl.png'
import PdfSVG from '../../assets/img/pdf.svg'
import PDF from '../../assets/pdf/action-info.pdf'

const ToggleButton = ({ isActive, handleClick }) => (
	<>
		{isActive ? (
			<div className="ToggleButton" onClick={handleClick}>
				<p className="ToggleButton__text">Свернуть</p>
				<img
					className="ToggleButton__img"
					src={ArrowUpSVG}
					alt="Свернуть список"
				/>
			</div>
		) : (
				<div className="ToggleButton" onClick={handleClick}>
					<p className="ToggleButton__text">Подробнее</p>
					<img
						className="ToggleButton__img"
						src={ArrowDownSVG}
						alt="Развернуть список"
					/>
				</div>
			)}
	</>
)

const InfoBlock = () => (
	<div className="InfoBlock">
		<div className="InfoBlock__content">
			<div className="InfoBlock__content__item">
				<h3 className="InfoBlock__content__item__title title-h3">
					Как участвовать
				</h3>
				<p className="InfoBlock__content__item__text">
					Пополните ваш накопительный счет и совершайте покупки с карты «ОТП
					Покупки». Сто участников, которые совершат наибольший объем покупок,
					станут обладателями призов!
				</p>
			</div>
			<div className="InfoBlock__content__item">
				<h3 className="InfoBlock__content__item__title title-h3">
					Призовой фонд
				</h3>
				<p className="InfoBlock__content__item__text">
					Получите удвоение остатка на вашем накопительном счете до 350 000
					рублей или другие денежные призы!
				</p>
			</div>
		</div>
		<p className='InfoBlock__info'>Акция «Будь в плюсе» завершена, победители получат призы до 30 ноября 2020.</p>
		<div className="InfoBlock__pdf-block">
			<img
				className="InfoBlock__pdf-block__img"
				src={PdfSVG}
				alt="Иконка PDF файла"
			/>
			<a href={PDF} className="InfoBlock__pdf-block__text">
				Правила акции
			</a>
		</div>
	</div>
)

class ActionInfo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isActive: false,
		}
	}

	handleClick = () => {
		this.setState({
			isActive: !this.state.isActive,
		})
	}

	render() {
		const isActive = this.state.isActive

		return (
			<section className="ActionInfo">
				<div className="container">
					<div className="ActionInfo__wrapper">
						<div className="ActionInfo__left">
							<h2 className="ActionInfo__left__title">Акция «Будь в плюсе»</h2>
							{isActive && <InfoBlock />}
							<ToggleButton
								isActive={isActive}
								handleClick={this.handleClick}
							/>
						</div>
						{/* <div className="ActionInfo__right">
							<img
								className="ActionInfo__right__img"
								src={GirlPNG}
								alt="Изображение девочки"
							/>
						</div> */}
					</div>
				</div>
			</section>
		)
	}
}

export default ActionInfo