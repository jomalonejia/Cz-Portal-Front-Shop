import { createSelector } from 'reselect'

export const ordersState = state => state.account.orders

export const ordersSelector = createSelector(
  [ordersState],
  (orders) => ({orders})
)