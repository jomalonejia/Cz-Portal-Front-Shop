import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Item from '../../components/item'
import * as itemActions from '../../actions/item'

@connect(
  null,
  dispatch => bindActionCreators({...itemActions}, dispatch)
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
      `/api/item/get/${itemId}`
    )
      .then(res => {
        this.setState({item: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  change(){
    console.log('....')
    this.props.history.push('/cart')
  }

  render () {
    return (
      <div>
        <button onClick={this.change.bind(this)}>click</button>
        <Item item={this.state.item} {...this.props}/>
      </div>
    )
  }
}

export default ItemContainer
