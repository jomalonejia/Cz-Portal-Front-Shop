import { all } from 'redux-saga/effects';

import {accountSagas} from './account';
import {homepageSagas} from './homepage';
import {itemSagas} from './item';

export default function* sagas(){
  yield all([
    ...accountSagas,
    ...homepageSagas,
    ...itemSagas
  ])
}