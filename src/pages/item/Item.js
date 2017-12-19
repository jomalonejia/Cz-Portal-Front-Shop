import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import ItemComponent from './components'
import {usernameSelector} from 'src/selectors/user'
import * as itemActions from './actions'
import {addToCart} from 'src/pages/cart/actions'
import {items} from 'src/mockData/item'

@connect(
  state => usernameSelector,
  dispatch => bindActionCreators({...itemActions,addToCart}, dispatch)
)
class Item extends Component {

  constructor (props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  componentWillMount () {
    const {match} = this.props
    let itemId = match.params.id
    const item  = items.find(item => item.id === itemId)
    this.setState({item: item})
  }

  render () {
    return (
      <div>
        <ItemComponent item={this.state.item} {...this.props}/>
      </div>
    )
  }
}

export default Item
