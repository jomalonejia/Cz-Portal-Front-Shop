import { Record } from 'immutable'
import update from 'immutability-helper'
import * as cartActions from '../../actions/cart'

export const CartState = ({
  carts: [],
  /*chosenCartIds:[]*/
})

export function cartReducers (state = CartState, action) {
  switch (action.type) {
    case cartActions.GET_CART_SUCCESS:
      return update(state, {
        carts: {$set: action.payload}
      })
    case cartActions.GET_CART_FAILED:
      return state
    case cartActions.CHANGE_CART_COUNT:
      return update(state, {
        carts: {
          [action.payload.index]: {
            count: {$set: state.carts[action.payload.index].count + action.payload.count}
          }
        }
      })
    case cartActions.DELETE_CART_SUCCESS:
      return {...state, carts: state.carts.filter(cart => cart.id != action.payload)}
    case cartActions.DELETE_CART_FAILED:
      return state
    case cartActions.CHOOSE_CART:
      console.log(action.payload)
      if (action.payload.checked) {
        return update(state, {
          carts: {
            [action.payload.value]: {
              chosen: {$set: true}
            }
          }
        })
      } else {
        return update(state, {
          carts: {
            [action.payload.value]: {
              chosen: {$set: false}
            }
          }
        })
      }
    case cartActions.CHOOSE_CART_ALL:
      if (action.payload.checked) {
        return update(state, {
          carts: {
            $apply: carts =>
              carts.map(cart =>
                update(cart, {
                  chosen: {$set: true}
                })
              )
          }
        })
      } else {
        return update(state, {
          carts: {
            $apply: carts =>
              carts.map(cart =>
                update(cart, {
                  chosen: {$set: false}
                })
              )
          }
        })
      }
    default :
      return state
  }
}


