import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'src/store'
import { bindActionCreators } from 'redux'
import OrderComponent from './components/order'
import { ordersSelector } from './selectors/order'
import * as orderActions from './actions/order'


@connect(
  state => ordersSelector,
  dispatch => bindActionCreators({...orderActions}, dispatch))
export default class Order extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount(){
    store.dispatch(orderActions.getOrders(1))
  }

  render () {
    return (
     <OrderComponent {...this.props}/>
    )
  }
}