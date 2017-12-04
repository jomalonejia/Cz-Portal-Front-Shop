import { all } from 'redux-saga/effects'

import { userSagas } from './user'
import { accountSagas } from 'src/pages/account/sagas'
import { homepageSagas } from 'src/pages/homepage/sagas'
import { itemSagas } from 'src/pages/item/sagas'
import { cartSagas } from 'src/pages/cart/sagas'
import { checkoutSagas } from 'src/pages/checkout/sagas'
import { paymentSagas } from 'src/pages/payment/sagas'
import { commentSagas } from 'src/pages/comment/sagas'

export default function* sagas () {
  yield all([
    ...accountSagas,
    ...homepageSagas,
    ...itemSagas,
    ...userSagas,
    ...cartSagas,
    ...checkoutSagas,
    ...paymentSagas,
    ...commentSagas
  ])
}