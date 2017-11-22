import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../../components/account/menu'
import AddressContainer from './addressContainer'
import Info from '../../components/account/info'
import OrderContainer from './orderContainer'
import Support from '../../components/account/support'
import { getMenuSelector } from '../../selectors/account/menu'
import * as menuActions from '../../actions/account/menu'
import * as accountMenuConstants from '../../constants/menu.constants'

@connect(
  null,
  null)
export default class AccountContainer extends Component {
  constructor (props) {
    super(props)
  }

  getDynamicComponent (currentMenu, props) {
    switch (currentMenu) {
      case 'order':
        return <OrderContainer/>
      case 'support':
        return <Support/>
      case 'info':
        return <Info/>
      case 'address':
        return <AddressContainer/>
      default:
        return null
    }
  }

  render () {

    const {match} = this.props

    let currentMenu = match.params.menu

    return (
      <div>
        <Menu {...this.props}/>
        {this.getDynamicComponent(currentMenu)}
      </div>
    )

  }
}