import { Record } from 'immutable'
import * as cartActions from '../../actions/cart'

export const CartState = new Record({
  carts:[]
})

export function cartReducers (state = new CartState(), action) {
  switch (action.type) {
    case cartActions.GET_CART_SUCCESS:
     return Object.assign({},state,{carts:action.payload})
    case cartActions.GET_CART_FAILED:
      return state;
    default :
      return state
  }
}


