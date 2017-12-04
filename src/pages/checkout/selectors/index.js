import { createSelector } from 'reselect'
import {addressesState,addressIdState} from 'src/pages/account/selectors/address'

const cartsState = state => state.cart.carts

const cartSelector = createSelector(
  cartsState,
  carts => carts.filter(cart => cart.chosen)
)

export const checkoutSelector = createSelector(
  [cartSelector,addressesState,addressIdState],
  (carts,addresses,addressId) => ({carts,addresses,addressId})
)



