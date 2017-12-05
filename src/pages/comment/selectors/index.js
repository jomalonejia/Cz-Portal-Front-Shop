import { createSelector } from 'reselect'
import {usernameSelector} from 'src/selectors/user'

const itemOrderInfoState = state => state.comment.itemOrderInfo


export const itemOrderInfoSelector = createSelector(
  [itemOrderInfoState],
  (itemOrderInfo) => ({itemOrderInfo})
)



