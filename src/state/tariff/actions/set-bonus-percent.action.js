import actionTypes from '../actionTypes'
import {
  getBonusPercent,
  getSum,
  getBonusSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetBonusPercent = (depositRate, transactionRate, percent, month, tariffName) => {
  const bonusPercent = getBonusPercent(tariffName, transactionRate)
  const sum = getSum(depositRate, percent, month)
  const bonusSum = getBonusSum(tariffName, depositRate, bonusPercent, month)
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
