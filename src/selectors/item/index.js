import { createSelector } from 'reselect'
import {usernameState} from '../user'

const itemState = state => state.item.item

/*export const itemSelector = createSelector(
  [itemState,usernameState],
  (username, item) => {username, item}
)*/

export const itemSelector = createSelector(
  state => state.item.item,
  (item) => item
)



