import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import Address from '../../components/account/address'
import { addressesSelector } from '../../selectors/account/address'
import * as addressActions from '../../actions/account/address'
import bindActionCreators from 'redux/es/bindActionCreators'

@connect(
  state => addressesSelector,
  dispatch => bindActionCreators({...addressActions}, dispatch))
export default class AddressContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount(){
    store.dispatch(addressActions.getAddress())
  }

  render () {
    return (
     <Address {...this.props}/>
    )
  }
}