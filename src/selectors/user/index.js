import { createSelector } from 'reselect'

export const userLoginErrorSelector = createSelector(
  state => state.user.loginError,
  (loginError/*,otherArgs*/) => ({loginError/*,other*/})
)