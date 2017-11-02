import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory';
import * as homePageActions from '../../actions/homepage';



export function * getHotItems(){

}

export const homepageSagas = [
  fork(getHotItems)
]