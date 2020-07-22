import React from 'react'
import { Element } from 'react-scroll'

import './form.css'
import LockSVG from '../../assets/img/lock.svg'

const FormLeftColumn = () => (
	<div className="FormLeftColumn">
		<form className="FormLeftColumn__form">
			<div className="FormLeftColumn__form__field-block FormLeftColumn__form__field-block--full">
				<label htmlFor="" className="FormLeftColumn__form__field-block__label">
					Фамилия Имя Отчество
				</label>
				<input
					type="text"
					className="FormLeftColumn__form__field-block__input"
				/>
			</div>
			<div className="FormLeftColumn__form__field-block FormLeftColumn__form__field-block--full">
				<label htmlFor="" className="FormLeftColumn__form__field-block__label">
					Город получения карты
				</label>
				<input
					type="text"
					className="FormLeftColumn__form__field-block__input"
				/>
			</div>
			<div className="FormLeftColumn__form__field-block FormLeftColumn__form__field-block--half">
				<label htmlFor="" className="FormLeftColumn__form__field-block__label">
					Дата рождения
				</label>
				<input
					type="date"
					className="FormLeftColumn__form__field-block__input"
					placeholder="ДД.ММ.ГГГГ"
				/>
			</div>
			<div className="FormLeftColumn__form__field-block FormLeftColumn__form__field-block--half">
				<label htmlFor="" className="FormLeftColumn__form__field-block__label">
					Телефон
				</label>
				<input
					type="text"
					className="FormLeftColumn__form__field-block__input"
				/>
				<p className="FormLeftColumn__form__field-block__alert">
					Мы отправим вам SMS с кодом для подтверждения номера телефона
				</p>
			</div>
		</form>
		<div className="FormLeftColumn__info">
			<button disabled className="btn btn--disabled FormLeftColumn__info__btn">
				Продолжить
			</button>
			<div className="FormLeftColumn__info__alert">
				<img
					className="FormLeftColumn__info__alert__img"
					src={LockSVG}
					alt="Значок безопастности"
				/>
				<p className="FormLeftColumn__info__alert__text">Безопасность данных</p>
			</div>
			<p className="FormLeftColumn__info__text">
				Нажимая кнопку «Продолжить», я соглашаюсь с{' '}
				<a className="FormLeftColumn__info__text__link" href="/#">
					условиями
				</a>{' '}
				подачи онлайн-заявки
			</p>
		</div>
	</div>
)

const FormRightColumn = () => (
	<ul className="FormRightColumn">
		<li className="FormRightColumn__item">
			<h3 className="FormRightColumn__item__title">Заполните заявку онлайн</h3>
			<p className="FormRightColumn__item__text">
				вам понадобится паспорт <br /> и несколько минут.
			</p>
		</li>
		<li className="FormRightColumn__item">
			<h3 className="FormRightColumn__item__title">Выберите удобную дату</h3>
			<p className="FormRightColumn__item__text">
				наш сотрудник привезёт карту <br /> и документы.
			</p>
		</li>
		<li className="FormRightColumn__item">
			<h3 className="FormRightColumn__item__title">Пополните вклад</h3>
			<p className="FormRightColumn__item__text">
				в мобильном приложении <br />
				или удобным для вас способом.
			</p>
		</li>
	</ul>
)

const Form = ({ title }) => (
	<Element name="Form">
		<section className="Form">
			<div className="container">
				<h2 className="title-h2 Form__title">{title}</h2>
				<p className="Form__sub-title">
					Заполните анкету за 5 минут и откройте счет
				</p>
				<div className="Form__main">
					<FormLeftColumn />
					<FormRightColumn />
				</div>
			</div>
		</section>
	</Element>
)

export default Form
