import actionTypes from './actionTypes'
import { reducerSetTariff } from './reducers/set-tariff.reducer'
import { reducerSetTotalSum } from './reducers/set-total-sum.reducer'
import { reducerSetDepositRate } from './reducers/set-deposit-rate.reducer'
import { reducerSetMonth } from './reducers/set-month.reducer'
import { reducerSetBonusPercent } from './reducers/set-bonus-percent.reducer'

const initialState = {
  activeTariff: 1,
  tariffName: 'Накопительный счет',
  deposit: [
    {
      id: 1,
      month: 3,
      percent: 4,
      title: '3 месяца',
      subTitle: '4% годовых',
    },
    {
      id: 2,
      month: 6,
      percent: 4,
      title: '6 месяцев',
      subTitle: '4% годовых',
    },
    {
      id: 3,
      month: 12,
      percent: 4,
      title: '1 год',
      subTitle: '4% годовых',
    },
  ],
  minDepositRate: 1000,
  maxDepositRate: 350000,
  month: 3,
  depositRate: 300000,
  transactionRate: 15000,
  percent: 4,
  bonusPercent: 1,
  totalSum: 0,
  tariffList: [
    {
      id: 1,
      name: 'Накопительный счет',
      deposit: [
        {
          id: 1,
          month: 3,
          percent: 4,
          title: '3 месяца',
          subTitle: '4% годовых',
        },
        {
          id: 2,
          month: 6,
          percent: 4,
          title: '6 месяцев',
          subTitle: '4% годовых',
        },
        {
          id: 3,
          month: 12,
          percent: 4,
          title: '1 год',
          subTitle: '4% годовых',
        },
      ],
      minDepositRate: 1000,
      maxDepositRate: 350000,
    },
    {
      id: 2,
      name: 'Накопительный счет Premium',
      deposit: [
        {
          id: 1,
          month: 3,
          percent: 4,
          title: '3 месяца',
          subTitle: '4% годовых',
        },
        {
          id: 2,
          month: 6,
          percent: 4,
          title: '6 месяцев',
          subTitle: '4% годовых',
        },
        {
          id: 3,
          month: 12,
          percent: 4,
          title: '1 год',
          subTitle: '4% годовых',
        },
      ],
      minDepositRate: 35000,
      maxDepositRate: 30000000
    },
  ]
}

const tariffReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case actionTypes.SET_TARIFF:
      return reducerSetTariff(state, data)

    case actionTypes.SET_TOTAL_SUM:
      return reducerSetTotalSum(state, data)

    case actionTypes.SET_DEPOSIT_RATE:
      return reducerSetDepositRate(state, data)

    case actionTypes.SET_MONTH:
      return reducerSetMonth(state, data)

    case actionTypes.SET_BONUS_PERCENT:
      return reducerSetBonusPercent(state, data)

    default:
      return state
  }
}

export default tariffReducer
