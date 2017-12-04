import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {checkoutSelector} from './selectors'
import store from 'src/store'
import * as addressActions from 'src/pages/account/actions/address'
import {toggleAddress} from 'src/pages/account/actions/address'
import * as checkoutActions from './actions'
import CheckoutComponent from './components'


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
      <CheckoutComponent {...this.props}/>
    )
  }
}

export default CartContainer