import { createSelector } from 'reselect'
import {cartsState} from '../cart'
import {addressesState,addressIdState} from '../account/address'


const cartSelector = createSelector(
  cartsState,
  carts => carts.filter(cart => cart.chosen)
)

export const checkoutSelector = createSelector(
  [cartSelector,addressesState,addressIdState],
  (carts,addresses,addressId) => ({carts,addresses,addressId})
)



