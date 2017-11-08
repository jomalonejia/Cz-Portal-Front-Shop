import { call, fork, select, put, take, takeLatest} from 'redux-saga/effects'
import { push } from 'react-router-redux'
import axios from 'axios'
import * as registerActions from '../../actions/register'

import history from '../../history'

export function * register (action) {
  try {
    yield axios.post(`/api/user/register`, action.payload)
    yield put(registerActions.registerSuccess())
    yield history.push('/')
  } catch (err) {
    console.log(err);
    yield put(registerActions.registerFailed())
  }
}

function * getRegister () {
  yield takeLatest(registerActions.REGISTER, register)
}

export const userSagas = [
  fork(getRegister)
]