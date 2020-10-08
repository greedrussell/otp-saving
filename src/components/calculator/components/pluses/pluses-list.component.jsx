import React from 'react'

import './pluses-list.css'
import ArrowSVG from '../../../../assets/img/calculator__arrow.svg'

const PlusItem = ({ children }) => (
	<li className="CalculatorTariffTabs__pluses__item PlusItem">
		<img src={ArrowSVG} className="PlusItem__img" alt="" />
		<p className="PlusItem__text">{children}</p>
	</li>
)

const PlusesList = ({ tariffName }) => {
	return (
		<ul className="PlusesList">
			{
				tariffName === 'Накопительный счет Premium' ? (
					<>
						<p className='PlusesList__sub-title'>
							Станьте премиальным клиентом и получайте повышенную ставку до 6% на остаток до&nbsp;
							<span className='PlusesList__sub-title__green'>1 000 000 рублей</span>
						</p>
					</>
				) : (
						<>
							<PlusItem>Пополнение и снятие без ограничений</PlusItem>
							<PlusItem>Выплата процентов каждый месяц</PlusItem>
							<PlusItem>Возможность открытия онлайн</PlusItem>
						</>
					)
			}
		</ul>
	)
}

export default PlusesList
