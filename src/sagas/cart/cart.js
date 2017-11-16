import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authGet,authPost,authDelete} from '../../services/authHttp'
import * as cartActions from '../../actions/cart'
import history from '../../history'


export function * getCart() {
  while (true) {
    const action = yield take(cartActions.GET_CART)
    try {
      const username = yield select(state => state.user.username)
      const response = yield authGet(`/api/cart/get/${username}`)
      yield put(cartActions.getCartSuccess(response.data))
    } catch (err) {
      yield put(cartActions.getCartFailed())
    }
  }
}

export function * deleteCart() {
  while (true) {
    const action = yield take(cartActions.DELETE_CART)
    try {
      console.log(action.payload)
      yield authDelete(`/api/cart/delete/${action.payload}`)
      yield put(cartActions.deleteCartSuccess(action.payload))
    } catch (err) {
      yield put(cartActions.deleteCartFailed())
    }
  }
}

export function * addToCart (action) {
  try {
    yield authPost(`/api/cart/addToCart`,action.payload)
    yield history.push('/cart');
  } catch (err) {
    console.log(err);
  }
}



function * getAddToCart () {
  yield takeLatest(cartActions.ADD_TO_CART, addToCart)
}

export const cartSagas = [
  fork(getAddToCart),
  fork(getCart),
  fork(deleteCart)
]