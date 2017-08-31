

export const accountActions = {

  CHANGE_ACCOUNT_MENU:'[Account] CHANGE_ACCOUNT_MENU',
  CHANGE_ACCOUNT_MENU_SUCCESS:'[Account] CHANGE_ACCOUNT_MENU_SUCCESS',
  TEST_SAGA:'TEST_SAGA',

  changeAccountMenu:menu => ({
    type:accountActions.CHANGE_ACCOUNT_MENU,
    payload:menu
  }),

  changeAccountMenuSuccess:menu => ({
    type:accountActions.CHANGE_ACCOUNT_MENU_SUCCESS,
    payload:menu
  }),

  testSaga:res => ({
    type:accountActions.TEST_SAGA,
    payload:res
  })
}
