import { createSelector } from 'reselect'
import {cartsState} from '../cart'
import {addressesState} from '../account/address'


const cartSelector = createSelector(
  cartsState,
  carts => carts.filter(cart => cart.chosen)
)

export const checkoutSelector = createSelector(
  [cartSelector,addressesState],
  (carts,addresses) => ({carts,addresses})
)



