import { Record } from 'immutable'
import * as itemActions from '../../actions/item'

export const ItemState = new Record({
  test: 1
})

export function itemReducers (state = new ItemState(), action) {
  switch (action.type) {
    /*case itemActions.ADD_TO_CART:
     console.log(action.payload);
     return state.merge({});*/
    default :
      return state
  }
}


