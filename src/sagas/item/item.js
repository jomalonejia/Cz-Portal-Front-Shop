import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import axios from 'axios'
import { ADD_TO_CART } from '../../actions/item'

import history from '../../history'

export function * addToCart (action) {
  yield console.log(action.payload)
  try {
    yield axios.post(`/api/item/addToCart`, action.payload)
    //yield put(registerActions.registerSuccess())
    //yield history.push('/cart');
  } catch (err) {
    console.log(err);
    //yield put(registerActions.registerFailed())
  }

}

function * getAddToCart () {
  yield takeLatest(ADD_TO_CART, addToCart)
}

export const itemSagas = [
  fork(getAddToCart)
]