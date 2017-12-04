import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authPost} from 'src/services/authHttp'
import * as paymentActions from '../actions'
import history from 'src/history'






export function * pay() {
  const payAction = yield take(paymentActions.PAY)
}



export const paymentSagas = [
  fork(pay),
]