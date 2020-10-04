import update from 'immutability-helper';

export const reducerSetMonth = (state, data) => {
  return update(state, {
    month: { $set: data.month },
    percent: { $set: data.percent },
    totalSum: { $set: data.totalSum },
  });
}