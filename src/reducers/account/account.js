import { Record } from 'immutable'
import * as accountActions from '../../actions/account'

export const AccountState = new Record({
  currentAccountMenu: 'order'
})

export function accountReducers (state = new AccountState(), action) {
  switch (action.type) {
    case accountActions.CHANGE_ACCOUNT_MENU:
      return state.merge({
        currentAccountMenu: action.payload
      })
    default :
      return state
  }
}


