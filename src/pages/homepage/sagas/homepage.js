import { call, fork, select, put, take, takeLatest } from 'redux-saga/effects'

export function * getHotItems () {

}

export const homepageSagas = [
  fork(getHotItems)
]