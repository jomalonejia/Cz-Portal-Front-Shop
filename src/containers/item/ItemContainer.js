import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import Item from '../../components/item'
import {usernameSelector} from '../../selectors/user'
import * as itemActions from '../../actions/item'
import {addToCart} from '../../actions/cart'

@connect(
  state => usernameSelector,
  dispatch => bindActionCreators({...itemActions,addToCart}, dispatch)
)
class ItemContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  componentWillMount () {
    const {match} = this.props
    let itemId = match.params.id
    axios.get(
      `/api/item/item/get/${itemId}`
    )
      .then(res => {
        this.setState({item: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <Item item={this.state.item} {...this.props}/>
      </div>
    )
  }
}

export default ItemContainer
