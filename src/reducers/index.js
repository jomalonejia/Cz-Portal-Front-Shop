import { combineReducers } from 'redux'
import { accountReducers } from './account'
import { itemReducers } from './item'

export default combineReducers({
  account: accountReducers,
  item: itemReducers
})