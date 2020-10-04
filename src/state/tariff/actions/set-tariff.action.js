import actionTypes from '../actionTypes'
import {
  getBonusPercent,
  getBonusSum,
  getSum,
  getTotalSum
} from '../../../helpers/calculator.helper'

const actionSetTariff = (tariff, depositRate, transactionRate) => {
  const { minDepositRate, maxDepositRate } = tariff
  const { percent, month } = tariff.deposit[0]

  let newDepositRate = depositRate

  if (newDepositRate < minDepositRate) {
    newDepositRate = minDepositRate
  }

  if (newDepositRate > maxDepositRate) {
    newDepositRate = maxDepositRate
  }

  const bonusPercent = getBonusPercent(transactionRate)
  const sum = getSum(newDepositRate, percent, month)
  const bonusSum = getBonusSum(newDepositRate, bonusPercent, month)
  const totalSum = getTotalSum(sum, bonusSum)

  return ({
    type: actionTypes.SET_TARIFF,
    data: {
      activeTariff: tariff.id,
      tariffName: tariff.name,
      deposit: tariff.deposit,
      minDepositRate,
      maxDepositRate,
      depositRate: newDepositRate,
      totalSum,
      month,
      percent,
      bonusPercent,
    }
  })
}

export default actionSetTariff
