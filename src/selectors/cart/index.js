import { createSelector } from 'reselect'
import {usernameSelector} from '../user'

const cartsState = state => state.cart.carts

export const cartSelector = createSelector(
  usernameSelector,cartsState,
  (username,carts) => ({username,carts})
)



