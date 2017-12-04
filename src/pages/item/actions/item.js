export const GET_ITEM_BY_ID = '[Item] GetItemById'
export const GET_ITEM_BY_ID_SUCCESS = '[Item] GetItemByIdSuccess'
export const ADD_COMMENT = '[Item] AddComment'
export const ADD_COMMENT_SUCCESS = '[Item] AddCommentSuccess'


export const getItemById = itemId => ({
  type: GET_ITEM_BY_ID,
  payload: itemId
})

export const getItemByIdSuccess = item => ({
  type: GET_ITEM_BY_ID_SUCCESS,
  payload: item
})

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
})

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment
})



