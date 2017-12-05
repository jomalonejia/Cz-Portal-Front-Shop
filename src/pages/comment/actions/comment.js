export const GET_ITEM_ORDER_INFO = '[Comment] GetItemOrderInfo'
export const GET_ITEM_ORDER_INFO_SUCCESS = '[Comment] GetItemOrderInfoSuccess'
export const ADD_COMMENT = '[Comment] AddComment'
export const ADD_COMMENT_SUCCESS = '[Comment] AddCommentSuccess'

export const getItemOrderInfo = itemId => ({
  type: GET_ITEM_ORDER_INFO,
  payload: itemId
})

export const getItemOrderInfoSuccess = info => ({
  type: GET_ITEM_ORDER_INFO_SUCCESS,
  payload: info
})

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

export const addCommentSuccess = isSuccess => ({
  type: ADD_COMMENT,
  payload: isSuccess
})




