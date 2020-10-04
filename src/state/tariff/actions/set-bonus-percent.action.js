import actionTypes from '../actionTypes'
import {
  getBonusPercent,
  getSum,
  getBonusSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetBonusPercent = (depositRate, transactionRate, percent, month) => {
  const bonusPercent = getBonusPercent(transactionRate)
  const sum = getSum(depositRate, percent, month)
  const bonusSum = getBonusSum(depositRate, bonusPercent, month)
  const totalSum = getTotalSum(sum, bonusSum)

  return ({
    type: actionTypes.SET_BONUS_PERCENT,
    data: {
      bonusPercent,
      transactionRate,
      totalSum
    }
  })
}

export default actionSetBonusPercent
