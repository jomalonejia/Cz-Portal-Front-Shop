import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authGet,authPost} from 'src/services/authHttp'
import {authChangePage} from 'src/services/pageService'
import * as accountActions from '../actions'

export function* addAddress (action){
  const address = action.payload;
  try {
    const username = yield select(state => state.user.username)
    address.username = username
    yield authPost(`/api/user/address/add`,address)
    yield put(accountActions.addAddressSuccess(address))
  } catch (err) {
    console.log(err)
  }
}

export function* getAddress(){
  while (true){
    yield take(accountActions.GET_ADDRESS)
    try {
       const username = yield select(state => state.user.username)
       const response = yield authGet(`/api/user/address/get/${username}`)
       yield put(accountActions.getAddressSuccess(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function* getOrders(){
  while (true){
    const action = yield take(accountActions.GET_ORDERS)
    try {
      const username = yield select(state => state.user.username)
      const response = yield authChangePage(`/api/item/order/get/${username}`,action.payload)
      yield put(accountActions.getOrdersSuccess(response.data))
    } catch (err) {
      console.log(err)
    }
  }
}

function * getAddAddress () {
  yield takeLatest(accountActions.ADD_ADDRESS, addAddress)
}


export const accountSagas = [
  fork(getAddAddress),
  fork(getAddress),
  fork(getOrders)
]