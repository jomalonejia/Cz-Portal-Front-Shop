import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export function * forword(){
  /*history.push('/')*/
}

export function * testFlow(){
  while (true){
    let obj = yield take('TEST_SAGA');
    console.log(obj);
    yield put({type:'[Account] CHANGE_ACCOUNT_MENU',payload:obj.payload})
    yield call(forword)
  }
}

export const accountSagas = [
  fork(testFlow)
]