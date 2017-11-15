import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import axios from 'axios'
import {get} from '../../services/authHttp'
import * as cartActions from '../../actions/cart'
import { login } from '../../services/authFetch'

import history from '../../history'

export function * getCart() {
  while (true) {
    const action = yield take(cartActions.GET_CART)
    try {
      const username = yield select(state => state.user.username)
      const response = yield get(`/api/cart/get/${username}`)
      yield put(cartActions.getCartSuccess(response.data))
    } catch (err) {
      yield put(cartActions.getCartFailed())
    }
  }
}

export const cartSagas = [
  fork(getCart)
]