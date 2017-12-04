export const ADD_TO_CART = '[Item] AddtoCart'
export const GET_CART = '[Cart] GetCart'
export const GET_CART_SUCCESS = '[Cart] GetCartSuccess'
export const GET_CART_FAILED = '[Cart] GetCartFailed'
export const CHANGE_CART_COUNT = '[Cart] changeCartCount'
export const DELETE_CART = '[Cart] DeleteCart'
export const DELETE_CART_SUCCESS = '[Cart] DeleteCartSuccess'
export const DELETE_CART_FAILED = '[Cart] DeleteCartFailed'
export const CHOOSE_CART = '[Cart] ChooseCart'
export const CHOOSE_CART_ALL = '[Cart] ChooseCartAll'
export const DELETE_CART_ALL = '[Cart] DeleteCartAll'
export const DELETE_CART_ALL_SUCCESS = '[Cart] DeleteCartAllSuccess'
export const DELETE_CART_ALL_FAILED = '[Cart] DeleteCartAllFailed'
export const REMOVE_CARTS = '[Cart] RemoveCarts'

export const addToCart = cart => ({
  type: ADD_TO_CART,
  payload: cart
})

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
  type: CHANGE_CART_COUNT,
  payload: obj
})

export const deleteCart = cartId => ({
  type: DELETE_CART,
  payload: cartId
})

export const deleteCartSuccess = cartId => ({
  type: DELETE_CART_SUCCESS,
  payload: cartId
})

export const deleteCartFailed = (cartId) => ({
  type: DELETE_CART_FAILED,
  payload: cartId
})

export const chooseCart = obj => ({
  type: CHOOSE_CART,
  payload: obj
})

export const chooseCartAll = obj => ({
  type: CHOOSE_CART_ALL,
  payload: obj
})

export const deleteCartAll = () => ({
  type: DELETE_CART_ALL,
})

export const deleteCartAllSuccess = () => ({
  type: DELETE_CART_ALL_SUCCESS,
})

export const deleteCartAllFailed = () => ({
  type: DELETE_CART_ALL_FAILED,
})

export const removeCarts = obj => ({
  type: REMOVE_CARTS,
  payload: obj
})





