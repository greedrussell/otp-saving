import React from 'react'

import './calcualtor-tabs.css'



const CalculatorTabsComponent = ({ handleActiveTariffClick, tariffList, activeTariff }) => {
  return (
    <div className='CalculatorTabs'>
      <p
        className={activeTariff === tariffList[0].id ? 'CalculatorTabs__text active' : 'CalculatorTabs__text'}
        data-id={tariffList[0].id}
        onClick={handleActiveTariffClick(tariffList[0])}
      >
        Всем клиентам
    </p>
      <p
        className={activeTariff === tariffList[1].id ? 'CalculatorTabs__text active' : 'CalculatorTabs__text'}
        data-id={tariffList[1].id}
        onClick={handleActiveTariffClick(tariffList[1])}
      >
        ОТП Premium
    </p>
      <div className='CalculatorTariffTabs__green-line'></div>
    </div>
  )
}

export default CalculatorTabsComponent
