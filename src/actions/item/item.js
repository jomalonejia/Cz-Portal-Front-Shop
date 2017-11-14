export const GET_ITEM_BY_ID = '[Item] GetItemById'
export const GET_ITEM_BY_ID_SUCCESS = '[Item] GetItemByIdSuccess'
export const ADD_TO_CART = '[Item] AddtoCart'

export const getItemById = itemId => ({
  type: GET_ITEM_BY_ID,
  payload: itemId
})

export const getItemByIdSuccess = item => ({
  type: GET_ITEM_BY_ID_SUCCESS,
  payload: item
})

export const addToCart = cart => ({
  type: ADD_TO_CART,
  payload: cart
})

