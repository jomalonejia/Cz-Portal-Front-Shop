import { createSelector } from 'reselect'


export const usernameState = state => state.user.username

export const userLoginErrorSelector = createSelector(
  state => state.user.loginError,
  (loginError/*,otherArgs*/) => ({loginError/*,other*/})
)

export const usernameSelector = createSelector(
  state => state.user.username,
  (username) => ({username})
)

