import { combineReducers } from 'redux'
import { userReducers } from './user'
import { accountReducers } from 'src/pages/account/reducers'
import { itemReducers } from 'src/pages/item/reducers'
import { cartReducers } from 'src/pages/cart/reducers'
import { commentReducers } from 'src/pages/comment/reducers'

export default combineReducers({
  account: accountReducers,
  item: itemReducers,
  user:userReducers,
  cart:cartReducers,
  comment:commentReducers
})