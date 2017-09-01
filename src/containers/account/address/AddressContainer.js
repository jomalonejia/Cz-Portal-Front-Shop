import React, { Component } from 'react'
import { connect } from 'react-redux'

import Address from '../../../components/account/address'

class AddressContainer extends Component {
  render () {

    const addresses = [
      {
        fullName: 'michael',
        address: '北京市 市辖区 东城区',
        detailAddress: '123幢403',
        phoneNumber: '123456789',
        default: true
      },
      {
        fullName: 'michael2',
        address: '北京市 市辖区 东城区2',
        detailAddress: '123幢404',
        phoneNumber: '123456789',
        default: false
      },
    ]

    return (
      <Address addresses={addresses}/>
    )
  }
}

export default AddressContainer