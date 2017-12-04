import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import { authPost } from 'src/services/authHttp'
import * as checkoutActions from '..//actions'
import { removeCarts } from 'src/pages/cart/actions'
import history from 'src/history'

export function* goToPay (action) {
  try {
    const addressId = yield select(state => state.account.addressId)
    const carts = action.payload
    carts.map(cart => cart.addressId = addressId)
    const cartIds = carts.map(cart => cart.id)
    authPost(`/api/item/order/add`, carts)
    yield put(removeCarts(cartIds))
    yield history.push('/payment')
  } catch (err) {
    console.log(err)
  }

}

function * getGoToPay () {
  yield takeLatest(checkoutActions.GO_TO_PAY, goToPay)
}

export const checkoutSagas = [
  fork(getGoToPay)
]