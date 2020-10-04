import actionTypes from '../actionTypes'
import {
  getBonusPercent,
  getSum,
  getBonusSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetDepositRate = (depositRate, transactionRate, percent, month, tariffName) => {
  const bonusPercent = getBonusPercent(tariffName, transactionRate)
  const sum = getSum(depositRate, percent, month)
  const bonusSum = getBonusSum(tariffName, depositRate, bonusPercent, month)
  const totalSum = getTotalSum(sum, bonusSum)

  return ({
    type: actionTypes.SET_DEPOSIT_RATE,
    data: {
      depositRate,
      totalSum
    }
  })
}

export default actionSetDepositRate
