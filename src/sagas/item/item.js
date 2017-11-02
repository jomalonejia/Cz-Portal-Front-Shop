import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory';
import * as itemActions from '../../actions/item';


const history = createHistory();


export function * addToCart(){
  /* while (true){
   let menuAction = yield take(menuActions.changeAccountMenu);
   console.log(menuAction.payload);
   yield put(menuActions.changeAccountMenuSuccess(menuAction.payload));
   yield history.push('/account/'+menuAction.payload);
   }*/

  while (true){
    let addToCartAction = yield take(itemActions.addToCart);
    console.log(addToCartAction.payload);
    yield call(history.push, '/cart')
  }
}

export const itemSagas = [
  fork(addToCart)
]