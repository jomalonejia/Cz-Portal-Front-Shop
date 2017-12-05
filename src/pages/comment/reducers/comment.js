import { Record } from 'immutable'
import update from 'immutability-helper'
import * as commentActions from '../actions/comment'

export const CommentState = ({
  itemOrderInfo:{},
})

export function commentReducers (state = CommentState, action) {
  switch (action.type) {
    case commentActions.GET_ITEM_ORDER_INFO_SUCCESS:
      return update(state,{
        itemOrderInfo:{$set:action.payload}
      })
    default :
      return state
  }
}


