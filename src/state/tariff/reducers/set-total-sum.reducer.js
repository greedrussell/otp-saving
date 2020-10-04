import update from 'immutability-helper';

export const reducerSetTotalSum = (state, data) => {
  return update(state, {
    totalSum: { $set: data.totalSum }
  });
}