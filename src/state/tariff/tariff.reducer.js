import actionTypes from './actionTypes'
import { reducerSetTariff } from './reducers/set-tariff.reducer'

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
  // для подсчета дохода
  month: 3,
  depositRate: 300000,
  transactionRate: 15000,
  percent: 4,
  bonusPercent: 1,
  // finaly data
  bonusSum: 0,
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

    default:
      return state
  }
}

export default tariffReducer
