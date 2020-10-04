import actionTypes from '../actionTypes'
import {
  getBonusPercent,
  getSum,
  getBonusSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetMonth = (depositRate, transactionRate, percent, month) => {
  const bonusPercent = getBonusPercent(transactionRate)
  const sum = getSum(depositRate, percent, month)
  const bonusSum = getBonusSum(depositRate, bonusPercent, month)
  const totalSum = getTotalSum(sum, bonusSum)

  return ({
    type: actionTypes.SET_MONTH,
    data: {
      month,
      percent,
      totalSum
    }
  })
}

export default actionSetMonth
