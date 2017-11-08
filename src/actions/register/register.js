export const REGISTER = '[REGISTER] Register'
export const REGISTER_SUCCESS = '[REGISTER] Register Success'
export const REGISTER_FAILED = '[REGISTER] Register Failed'

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

