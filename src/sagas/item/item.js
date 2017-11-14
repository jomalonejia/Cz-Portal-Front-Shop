import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {post} from '../../services/authHttp'
import * as itemActions from '../../actions/item'

import history from '../../history'


export function * getItemById() {
  while (true){
    const action = yield take(itemActions.GET_ITEM_BY_ID)
    try {
      const response = yield axios.get(`/api/item/get/${action.payload}`)
      console.log(response)
      yield put(itemActions.getItemByIdSuccess(res))
      //yield axios.post(`/api/item/addToCart`, action.payload)
      //yield history.push('/cart');
    } catch (err) {
      console.log(err);
      //yield put(registerActions.registerFailed())
    }
  }
}

export function * addToCart (action) {
  yield console.log(action.payload)
  try {
    yield post(`/api/cart/addToCart`,action.payload)
    //yield axios.post(`/api/item/addToCart`, action.payload)
    //yield history.push('/cart');
  } catch (err) {
    console.log(err);
    //yield put(registerActions.registerFailed())
  }
}



function * getAddToCart () {
  yield takeLatest(itemActions.ADD_TO_CART, addToCart)
}

export const itemSagas = [
  fork(getItemById),
  fork(getAddToCart)
]