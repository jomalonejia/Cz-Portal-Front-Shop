import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import axios from 'axios'
import * as userActions from '../../actions/user'
import { login } from '../../services/authFetch'

import history from '../../history'

export function * registerFlow (action) {
  try {
    yield axios.post(`/api/user/register`, action.payload)
    yield put(userActions.registerSuccess())
    yield history.push('/')
  } catch (err) {
    yield put(userActions.registerFailed())
  }
}

export function * loginFlow (action) {
  try {
    const response = yield call(login,action.payload.username, action.payload.password)
    yield put(userActions.loginSuccess(Object.assign({},response,{username:action.payload.username})))
    const redirectUrl = new URLSearchParams(window.location.search).get('redirectUrl')
    if(redirectUrl){
      const re = /https?:\/\/.*?:\d+(.*?)/g
      const router = redirectUrl.replace(re,'')
      yield history.push(router)
    }else{
      yield history.push('/')
    }
  } catch (error) {
    yield put(userActions.loginFailed())
  }
}

function * getRegister () {
  yield takeLatest(userActions.REGISTER, registerFlow)
}

function * getLogin () {
  yield takeLatest(userActions.LOGIN, loginFlow)
}

export const userSagas = [
  fork(getRegister),
  fork(getLogin)
]