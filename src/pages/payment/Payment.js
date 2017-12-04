import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentComponent from './components'
import * as paymentActions from './actions'
import { bindActionCreators } from 'redux'

@connect(
  null,
  dispatch => bindActionCreators({...paymentActions}, dispatch)
)
class Payment extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <PaymentComponent {...this.props}/>
    )
  }
}

export default Payment
