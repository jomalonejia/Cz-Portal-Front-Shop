export const LOGIN = '[REGISTER] Login'
export const LOGIN_SUCCESS = '[REGISTER] Login Success'
export const LOGIN_FAILED = '[REGISTER] Login Failed'

export const REGISTER = '[REGISTER] Register'
export const REGISTER_SUCCESS = '[REGISTER] Register Success'
export const REGISTER_FAILED = '[REGISTER] Register Failed'

export const login = payload => ({
  type: LOGIN,
  payload: payload
})

export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const loginFailed = () => ({
  type: LOGIN_FAILED,
})

export const register = payload => ({
  type: REGISTER,
  payload: payload
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
})

export const registerFailed = () => ({
  type: REGISTER_FAILED,
})

