import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory'
import {accountActions} from '../actions/account'

const history = createHistory()


export function * changeAccountMenu(){
  while (true){
    let menuAction = yield take(accountActions.changeAccountMenu);
    console.log(menuAction.payload);
    yield put(accountActions.changeAccountMenuSuccess(menuAction.payload));
    yield history.push('/account/'+menuAction.payload);
  }
}

export const accountSagas = [
  fork(changeAccountMenu)
]