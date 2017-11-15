export const GET_CART = '[Cart] GetCart'
export const GET_CART_SUCCESS = '[Cart] GetCartSuccess'
export const GET_CART_FAILED = '[Cart] GetCartFailed'
export const CHANGE_CART_COUNT = '[Cart] changeCartCount'

export const getCart = () => ({
  type: GET_CART,
})

export const getCartSuccess = carts => ({
  type: GET_CART_SUCCESS,
  payload: carts
})

export const getCartFailed = (carts) => ({
  type: GET_CART_FAILED,
})

export const changeCartCount = obj => ({
  type:CHANGE_CART_COUNT,
  payload:obj
})


