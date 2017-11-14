import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { itemSelector } from '../../selectors/item'
import store from '../../store'
import Item from '../../components/item'
import * as itemActions from '../../actions/item'

@connect(
  state => itemSelector,
  dispatch => bindActionCreators({...itemActions}, dispatch)
)
class ItemContainer extends Component {

  constructor (props) {
    super(props)
    const {match} = this.props
    const itemId = match.params.id
    store.dispatch(itemActions.getItemById(itemId))
  }

  componentWillMount () {

  }

  render () {
    return (
      <div>
        <Item {...this.props}/>
      </div>
    )
  }
}

export default ItemContainer
