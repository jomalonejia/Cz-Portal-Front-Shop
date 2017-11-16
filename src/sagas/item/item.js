import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'


/*
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
*/



export const itemSagas = [

]