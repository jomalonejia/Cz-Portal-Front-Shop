import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import {authPost} from '../../services/authHttp'
import * as checkoutActions from '../../actions/checkout'
import history from '../../history'






export function * checkout() {
}



export const checkoutSagas = [
  fork(checkout),
]