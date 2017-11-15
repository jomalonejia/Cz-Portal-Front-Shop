import { all } from 'redux-saga/effects'

import { accountSagas } from './account'
import { homepageSagas } from './homepage'
import { itemSagas } from './item'
import { userSagas } from './user'
import { cartSagas } from './cart'

export default function* sagas () {
  yield all([
    ...accountSagas,
    ...homepageSagas,
    ...itemSagas,
    ...userSagas,
    ...cartSagas
  ])
}