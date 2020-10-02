import { combineReducers } from 'redux'

import tariffReducer from './tariff/tariff.reducer'

export default combineReducers({
  tariff: tariffReducer
})