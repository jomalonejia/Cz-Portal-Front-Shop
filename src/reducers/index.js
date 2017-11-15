import { combineReducers } from 'redux'
import { accountReducers } from './account'
import { itemReducers } from './item'
import { userReducers } from './user'
import { cartReducers } from './cart'

export default combineReducers({
  account: accountReducers,
  item: itemReducers,
  user:userReducers,
  cart:cartReducers
})