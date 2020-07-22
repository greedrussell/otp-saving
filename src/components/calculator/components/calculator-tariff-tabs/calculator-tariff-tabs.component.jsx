import React from '../../../customer-info/node_modules/react'

import './calculator-tariff-tabs.css'
import ArrowSVG from '../../../../assets/img/calculator__arrow.svg'

const PensionPluses = () => (
	<ul className="CalculatorTariffTabs__pluses">
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Пополнение вклада от 1 000 ₽
			</p>
		</li>
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Выплата процентов в конце срока
			</p>
		</li>
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Вклад пролонгируется
			</p>
		</li>
	</ul>
)

const MaximumPluses = () => (
	<ul className="CalculatorTariffTabs__pluses">
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Ставка +0,2% при открытии вклада <br /> в мобильном и интернет банках
			</p>
		</li>
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Высокие ставки до года
			</p>
		</li>
		<li className="CalculatorTariffTabs__pluses__item">
			<img
				src={ArrowSVG}
				className="CalculatorTariffTabs__pluses__item__img"
				alt=""
			/>
			<p className="CalculatorTariffTabs__pluses__item__text">
				Вклад пролонгируется
			</p>
		</li>
	</ul>
)

const CalculatorTariffTabs = ({
	tariffList,
	handleActiveTariffClick,
	activeTariff,
	tariffName,
}) => {
	return (
		<>
			<h3 className="Calculator__sub-title CalculatorTariffTabs__title">
				Выберите вклад
			</h3>
			<ul className="CalculatorTariffTabs__list">
				{tariffList.map(tariff => (
					<li
						className={
							activeTariff === tariff.id
								? 'CalculatorTariffTabs__item active'
								: 'CalculatorTariffTabs__item'
						}
						onClick={handleActiveTariffClick(tariff.id)}
						key={tariff.id}
						data-id={tariff.id}>
						{tariff.name}
					</li>
				))}
				<div className="CalculatorTariffTabs__green-line"></div>
			</ul>
			{tariffName === 'Пенсионный' ? <PensionPluses /> : <MaximumPluses />}
		</>
	)
}

export default CalculatorTariffTabs
