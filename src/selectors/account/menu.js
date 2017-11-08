import { createSelector } from 'reselect'

export const getMenuSelector = createSelector(
  state => state.account.currentAccountMenu,
  (currentAccountMenu/*,otherArgs*/) => ({currentAccountMenu/*,other*/})
)