import update from 'immutability-helper';

export const reducerSetTariff = (state, data) => {
  return update(state, {
    activeTariff: { $set: data.activeTariff },
    tariffName: { $set: data.tariffName },
    deposit: { $set: data.deposit },
    minDepositRate: { $set: data.minDepositRate },
    maxDepositRate: { $set: data.maxDepositRate },
    depositRate: { $set: data.depositRate },
    totalSum: { $set: data.totalSum },
    month: { $set: data.month },
    percent: { $set: data.percent },
    bonusPercent: { $set: data.bonusPercent }
  });
}