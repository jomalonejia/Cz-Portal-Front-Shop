import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory';
import * as accountActions from '../../actions/account';

const history = createHistory();


export function * changeAccountMenu(){
 /* while (true){
    let menuAction = yield take(menuActions.changeAccountMenu);
    console.log(menuAction.payload);
    yield put(menuActions.changeAccountMenuSuccess(menuAction.payload));
    yield history.push('/account/'+menuAction.payload);
  }*/
}

export const accountSagas = [
  fork(changeAccountMenu)
]