import { put, fork, takeLatest } from 'redux-saga/effects'
import { authGet, authPost, authDelete } from 'src/services/authHttp'
import * as commentActions from '../actions/'
import history from 'src/history'

export function * getItemOrderInfoFlow (action) {
  try {
    const response = yield authGet(`/api/item/order/getItemOrderInfo/${action.payload}`)
    yield put(new commentActions.getItemOrderInfoSuccess(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function * addComment (action) {
  try {
    yield authPost(`/api/item/order/comment/add`,action.payload)
    yield history.push(`/account/order`)
  } catch (err) {
    console.log(err)
  }
}

function * getItemOrderInfo () {
  yield takeLatest(commentActions.GET_ITEM_ORDER_INFO, getItemOrderInfoFlow)
}

function * getAddComment () {
  yield takeLatest(commentActions.ADD_COMMENT, addComment)
}

export const commentSagas = [
  fork(getItemOrderInfo),
  fork(getAddComment)
]