import { createSelector } from 'reselect';


export const getMenuSelector = createSelector(
  state => state.account.currentAccountMenu,
  //state => state.account.whatever,
  //currentAccountMenu => ({currentAccountMenu})
  (currentAccountMenu/*,otherArgs*/) => ({currentAccountMenu/*,other*/})
);