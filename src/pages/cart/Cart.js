import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from 'src/store'
import CartComponent from './components/'
import { cartSelector } from './selectors'
import * as cartActions from './actions'

@connect(
  state => cartSelector,
  dispatch => bindActionCreators({...cartActions}, dispatch)
)
class Cart extends Component {

  constructor (props) {
    super(props)
  }

  changeCount = (count, index) => {store.dispatch(cartActions.changeCartCount({count: count, index: index}))}

  componentWillMount () {
    store.dispatch(cartActions.getCart())
  }

  render () {
    return (
      <CartComponent changeCount={this.changeCount} {...this.props}/>
    )
  }
}

export default Cart