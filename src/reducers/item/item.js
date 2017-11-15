import { Record } from 'immutable'
import * as itemActions from '../../actions/item'

export const ItemState = new Record({

})

export function itemReducers (state = new ItemState(), action) {
  switch (action.type) {
    /*case itemActions.GET_ITEM_BY_ID_SUCCESS:
     console.log(action.payload);
     return Object.assign({},state,{item:action.payload})*/
    default :
      return state
  }
}


