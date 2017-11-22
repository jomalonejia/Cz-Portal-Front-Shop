import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import Order from '../../components/account/order'
import { ordersSelector } from '../../selectors/account/order'
import * as orderActions from '../../actions/account/order'
import bindActionCreators from 'redux/es/bindActionCreators'

@connect(
  state => ordersSelector,
  dispatch => bindActionCreators({...orderActions}, dispatch))
export default class AddressContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount(){
    store.dispatch(orderActions.getOrders())
  }


  render () {
    return (
     <Order {...this.props}/>
    )
  }
}