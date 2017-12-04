import { combineReducers } from 'redux'
import { accountReducers } from 'src/pages/account/reducers'
import { itemReducers } from 'src/pages/item/reducers'
import { userReducers } from './user'
import { cartReducers } from 'src/pages/cart/reducers'

export default combineReducers({
  account: accountReducers,
  item: itemReducers,
  user:userReducers,
  cart:cartReducers
})