import { Record } from 'immutable'
import update from 'immutability-helper'
import * as accountActions from '../../actions/account'

export const accountState = ({
  currentAccountMenu: 'order',
  addresses: [],
  addressId: '',
  orders: []
})

export function accountReducers (state = accountState, action) {
  switch (action.type) {
    case accountActions.CHANGE_ACCOUNT_MENU:
      return update(state, {
        currentAccountMenu: {$set: action.payload}
      })
    case accountActions.ADD_ADDRESS_SUCCESS:
      return update(state, {
        addresses: {$push: [action.payload]}
      })
    case accountActions.GET_ADDRESS_SUCCESS:
      return update(state, {
        addresses: {$set: [...action.payload]},
        addressId: {$set: action.payload.filter(address => address.defaultAddress)[0].id}
      })
    case accountActions.UPDATE_ADDRESS_SUCCESS:
      return update(state, {
        addresses: {
          [action.payload.index]: {$set: action.payload.address}
        }
      })
    case accountActions.TOGGLE_ADDRESS:
      return update(state, {
        addressId: {$set: action.payload}
      })
    case accountActions.GET_ORDERS_SUCCESS:
      return update(state, {
        orders: {$set: action.payload}
      })
    default :
      return state
  }
}


