import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authPost} from '../../services/authHttp'
import * as paymentActions from '../../actions/payment'
import history from '../../history'






export function * pay() {
  const payAction = yield take(paymentActions.PAY)
  console.log(payAction.payload)
}



export const paymentSagas = [
  fork(pay),
]