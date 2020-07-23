import React from 'react'

import './pluses-list.css'
import ArrowSVG from '../../../../assets/img/calculator__arrow.svg'

const PlusItem = ({ children }) => (
	<li className="CalculatorTariffTabs__pluses__item PlusItem">
		<img src={ArrowSVG} className="PlusItem__img" alt="" />
		<p className="PlusItem__text">{children}</p>
	</li>
)

const PlusesList = () => {
	return (
		<ul className="PlusesList">
			<PlusItem>Пополнение и снятие без ограничений</PlusItem>
			<PlusItem>Выплата процентов каждый месяц</PlusItem>
			<PlusItem>Возможность открытия онлайн</PlusItem>
		</ul>
	)
}

export default PlusesList
