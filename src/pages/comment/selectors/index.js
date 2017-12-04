import { createSelector } from 'reselect'
import {usernameSelector} from 'src/selectors/user'

export const cartsState = state => state.cart.carts

export const cartSelector = createSelector(
  [usernameSelector,cartsState/*,chosenCartIdsState*/],
  (username,carts/*,chosenCartIds*/) => ({username,carts/*,chosenCartIds*/})
)



