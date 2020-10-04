import update from 'immutability-helper';

export const reducerSetBonusPercent = (state, data) => {
  return update(state, {
    bonusPercent: { $set: data.bonusPercent },
    transactionRate: { $set: data.transactionRate },
    totalSum: { $set: data.totalSum }
  });
}