import { Record } from 'immutable'
import update from 'immutability-helper'
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
    case cartActions.CHANGE_CART_COUNT:
      console.log(action.payload)
      return update(state, {
        carts: {
          [action.payload.index]: {
            count: {$set: state.carts[action.payload.index].count+action.payload.count}
          }
        }
      });
    default :
      return state
  }
}


