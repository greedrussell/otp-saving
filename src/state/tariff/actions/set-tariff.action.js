import actionTypes from '../actionTypes'

const actionSetPremiumTariff = tariff => {
  return ({
    type: actionTypes.SET_TARIFF,
    data: {
      activeTariff: tariff.id,
      tariffName: tariff.name,
      deposit: tariff.deposit,
      minDepositRate: tariff.minDepositRate,
      maxDepositRate: tariff.maxDepositRate
    }
  })
}

export default actionSetPremiumTariff
