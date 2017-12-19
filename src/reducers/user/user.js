import { Record } from 'immutable'
import * as userActions from '../../actions/user'

export const userState = new Record({
  loginState:false,
  loginError:false,
  username:'',
  profile:`/src/images/profiles/zues.png`,
  access_token:'',
  refresh_token:''
})

export function userReducers (state = new userState(), action) {
  switch (action.type) {
    case userActions.LOGIN_SUCCESS:
      console.log(action.payload)
      return Object.assign({},state,
        {
          loginState:true,
          username:action.payload.username,
          profile:action.payload.profile,
          access_token:action.payload.access_token,
          refresh_token:action.payload.refresh_token
        });
    case userActions.LOGIN_FAILED:
      return Object.assign({},state,{loginError:true});
    case userActions.REGISTER_SUCCESS:
     return Object.assign({},state,{loginState:true});
    case userActions.REGISTER_FAILED:
      return state;
    default :
      return state;
  }
}


