import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authGet,authPost} from '../../services/authHttp'
import * as accountActions from '../../actions/account'

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

function * getAddAddress () {
  yield takeLatest(accountActions.ADD_ADDRESS, addAddress)
}


export const accountSagas = [
  fork(getAddAddress),
  fork(getAddress),
]