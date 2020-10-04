import actionTypes from '../actionTypes'
import {
  getSum,
  getBonusSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetTotalSum = (depositRate, percent, bonusPercent, month) => {
  const sum = getSum(depositRate, percent, month)
  const bonusSum = getBonusSum(depositRate, bonusPercent, month)
  const totalSum = getTotalSum(sum, bonusSum)

  return ({
    type: actionTypes.SET_TOTAL_SUM,
    data: {
      totalSum
    }
  })
}

export default actionSetTotalSum
