import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'
import * as itemActions from '../actions/item'
import {authPost} from 'src/services/authHttp'


export function * addComment() {
  while (true){
    const action = yield take(itemActions.ADD_COMMENT)
    try {
      const comment = action.payload;
      const username = yield select(state => state.user.username)
      comment.username = username;
      console.log(comment)
      const response = yield authPost(`/api/item/item/comment/add`,comment)
      console.log(response)
     /* const response = yield axios.get(`/api/item/get/${action.payload}`)
      console.log(response)
      yield put(itemActions.getItemByIdSuccess(res))*/
      //yield axios.post(`/api/item/addToCart`, action.payload)
      //yield history.push('/cart');
    } catch (err) {
      console.log(err);
      //yield put(registerActions.registerFailed())
    }
  }
}



export const itemSagas = [
  fork(addComment)
]