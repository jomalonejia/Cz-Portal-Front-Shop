import { createSelector } from 'reselect'

export const addressesState = state => state.account.addresses

export const addressesSelector = createSelector(
  [addressesState],
  (addresses) => ({addresses})
)