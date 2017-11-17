import { createSelector } from 'reselect'
import {cartsState} from '../cart'


const cartSelector = createSelector(
  cartsState,
  carts => carts.filter(cart => cart.chosen)
)

export const checkoutSelector = createSelector(
  [cartSelector],
  (carts) => ({carts})
)



