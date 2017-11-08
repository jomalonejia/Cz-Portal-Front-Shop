import { Record } from 'immutable'
import * as registerActions from '../../actions/register'

export const userState = new Record({
  loginState:false
})

export function userReducers (state = new userState(), action) {
  switch (action.type) {
    case registerActions.REGISTER_SUCCESS:
      console.log('success')
     return Object.assign({},state,{loginState:true});
    case registerActions.REGISTER_FAILED:
      return Object.assign({},state,{loginState:false});
    default :
      return state
  }
}


