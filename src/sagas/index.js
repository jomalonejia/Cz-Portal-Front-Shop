import { all } from 'redux-saga/effects'

import {accountSagas} from './account'

export default function* sagas(){
  yield all([
    ...accountSagas
  ])
}