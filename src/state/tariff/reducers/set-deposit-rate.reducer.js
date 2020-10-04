import update from 'immutability-helper';

export const reducerSetDepositRate = (state, data) => {
  return update(state, {
    depositRate: { $set: data.depositRate },
    totalSum: { $set: data.totalSum },
  });
}