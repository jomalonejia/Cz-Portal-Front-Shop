import React, { Component } from 'react'
import { connect } from 'react-redux'
import Payment from '../../components/payment'
import * as paymentActions from '../../actions/payment'
import { bindActionCreators } from 'redux'

@connect(
  null,
  dispatch => bindActionCreators({...paymentActions}, dispatch)
)
class PaymentContainer extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <Payment {...this.props}/>
    )
  }
}

export default PaymentContainer
