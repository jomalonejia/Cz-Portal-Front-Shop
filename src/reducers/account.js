import {Record} from 'immutable'
import {accountActions} from '../actions/account'

export const AccountState = new Record({
  currentAccountMenu:'order'
});

 export function accountReducers(state = new AccountState(),action){
  switch (action.type){
    case accountActions.CHANGE_ACCOUNT_MENU_SUCCESS:
      return state.merge({
        currentAccountMenu:action.payload
      });
     return state;
    default :
      return state;
  }
}


