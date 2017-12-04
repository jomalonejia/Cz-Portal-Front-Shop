import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from 'src/store'
import AddressComponent from './components/address'
import { addressesSelector } from './selectors/address'
import * as addressActions from './actions/address'


@connect(
  state => addressesSelector,
  dispatch => bindActionCreators({...addressActions}, dispatch))
export default class Address extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount(){
    store.dispatch(addressActions.getAddress())
  }

  render () {
    return (
     <AddressComponent {...this.props}/>
    )
  }
}