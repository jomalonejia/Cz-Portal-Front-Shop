import React, { Component } from 'react'
import { connect } from 'react-redux'
import {checkoutSelector} from '../../selectors/checkout'
import store from '../../store'
import * as addressActions from '../../actions/account/address'
import * as checkoutActions from '../../actions/checkout'
import {toggleAddress} from '../../actions/account/address'
import Checkout from '../../components/checkout'
import { bindActionCreators } from 'redux'

@connect(
  state => checkoutSelector,
  dispatch => bindActionCreators({...checkoutActions,toggleAddress}, dispatch)
)
class CartContainer extends Component {

  constructor (props){
    super(props)
  }
  componentWillMount(){
    store.dispatch(addressActions.getAddress())
  }
  render () {
    return (
      <Checkout {...this.props}/>
    )
  }
}

export default CartContainer