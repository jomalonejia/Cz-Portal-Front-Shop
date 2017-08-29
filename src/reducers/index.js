import { combineReducers } from 'redux';

import {accountReducers} from './account'

export default combineReducers({
  account:accountReducers
})