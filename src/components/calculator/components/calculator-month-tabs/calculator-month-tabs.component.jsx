import React from 'react'

import './calculator-month-tabs.css'

const Tab = ({ isActive, title, subTitle = '', handleClick }) => (
	<div className={isActive ? 'Tab active' : 'Tab'} onClick={handleClick}>
		<h3 className="Tab__title">{title}</h3>
		{subTitle.length > 0 && <p className="Tab__sub-title">{subTitle}</p>}
	</div>
)

const CalculatorMonthTabs = ({ deposit, month, title, handleClick }) => (
	<div className="CalculatorMonthTabs">
		<h3 className="Calculator__sub-title CalculatorMonthTabs__title">
			{title}
		</h3>
		<ul className="CalculatorMonthTabs__list">
			{deposit.map(item => (
				<Tab
					isActive={month === item.month}
					title={item.title}
					subTitle={item.subTitle}
					id={item.percent}
					handleClick={handleClick(item.month, item.percent)}
					key={item.id}
				/>
			))}
		</ul>
	</div>
)

export default CalculatorMonthTabs
