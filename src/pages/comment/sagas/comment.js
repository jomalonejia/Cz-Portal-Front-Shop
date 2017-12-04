import { call,select, fork, takeLatest } from 'redux-saga/effects'
import {authGet,authPost,authDelete} from 'src/services/authHttp'
import * as commentActions from '../actions/'
import history from 'src/history'




export function * getItemOrderInfoFlow (action) {
  try {
      yield console.log(action.payload)
      //const response = yield authGet(`/api/item/order/get/${action.payload}`)
    //console.log(response)
    /*yield authPost(`/api/item/cart/addToCart`,action.payload)
    yield history.push('/cart');*/
  } catch (err) {
    console.log(err);
  }
}



function * getItemOrderInfo () {
  yield takeLatest(commentActions.GET_ITEM_ORDER_INFO, getItemOrderInfoFlow)
}

export const commentSagas = [
  fork(getItemOrderInfo)

]