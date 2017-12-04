import { createSelector } from 'reselect'

export const addressesState = state => state.account.addresses
export const addressIdState = state => state.account.addressId

export const addressesSelector = createSelector(
  [addressesState],
  (addresses) => ({addresses})
)