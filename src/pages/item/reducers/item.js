import { Record } from 'immutable'
import * as itemActions from '../actions/item'

export const ItemState = new Record({

})

export function itemReducers (state = new ItemState(), action) {
  switch (action.type) {
    case itemActions.ADD_COMMENT_SUCCESS:
      return state;
    default :
      return state
  }
}


