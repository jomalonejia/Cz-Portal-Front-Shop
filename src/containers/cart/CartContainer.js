import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../../store'
import Cart from '../../components/cart'
import { cartSelector } from '../../selectors/cart'
import * as cartActions from '../../actions/cart'

@connect(
  state => cartSelector,
  dispatch => bindActionCreators({...cartActions}, dispatch)
)
class CartContainer extends Component {

  constructor (props) {
    super(props)
  }

  changeCount = (count, index) => {store.dispatch(cartActions.changeCartCount({count: count, index: index}))}

  componentWillMount () {
    store.dispatch(cartActions.getCart())
  }

  render () {
    return (
      <Cart changeCount={this.changeCount} {...this.props}/>
    )
  }
}

export default CartContainer