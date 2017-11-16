export const GET_ITEM_BY_ID = '[Item] GetItemById'
export const GET_ITEM_BY_ID_SUCCESS = '[Item] GetItemByIdSuccess'


export const getItemById = itemId => ({
  type: GET_ITEM_BY_ID,
  payload: itemId
})

export const getItemByIdSuccess = item => ({
  type: GET_ITEM_BY_ID_SUCCESS,
  payload: item
})


