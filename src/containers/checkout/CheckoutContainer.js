import React, { Component } from 'react'
import { connect } from 'react-redux'
import {checkoutSelector} from '../../selectors/checkout'

import Checkout from '../../components/checkout'

@connect(
  state => checkoutSelector,
  null
)
class CartContainer extends Component {

  constructor (props){
    super(props)
  }
  render () {
    return (
      <Checkout {...this.props}/>
    )
  }
}

export default CartContainer