import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {get} from '../../services/authHttp'
import * as cartActions from '../../actions/cart'


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