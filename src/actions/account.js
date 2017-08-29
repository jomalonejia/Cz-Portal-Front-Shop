

export const accountActions = {

  CHANGE_ACCOUNT_MENU:'[Account] CHANGE_ACCOUNT_MENU',
  TEST_SAGA:'TEST_SAGA',

  changeAccountMenu:menu => ({
    type:accountActions.CHANGE_ACCOUNT_MENU,
    payload:menu
  }),

  testSaga:res => ({
    type:accountActions.TEST_SAGA,
    payload:res
  })
}
