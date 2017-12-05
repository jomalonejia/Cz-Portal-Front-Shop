import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as userActions from 'src/actions/user'
import { login, getUserInfo } from 'src/services/authFetch'

import history from 'src/history'

export function * registerFlow (action) {
  try {
    yield axios.post(`/api/user/user/register`, action.payload)
    yield put(userActions.registerSuccess())
    yield history.push('/')
  } catch (err) {
    yield put(userActions.registerFailed())
  }
}

export function * loginFlow (action) {
  try {
    const response = yield call(login, action.payload.username, action.payload.password)

    const userInfoResponse =
      yield axios.get(`/api/user/user/getUserInfo`,
        {
          params: {
            username: action.payload.username
          },
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        }
      )
    yield put(userActions.loginSuccess(Object.assign({}, response, userInfoResponse.data)))
    const redirectUrl = new URLSearchParams(window.location.search).get('redirectUrl')
    if (redirectUrl) {
      const re = /https?:\/\/.*?:\d+(.*?)/g
      const router = redirectUrl.replace(re, '')
      yield history.push(router)
    } else {
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