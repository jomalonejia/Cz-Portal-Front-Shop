import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../../components/account/menu'
import AddressContainer from './addressContainer'
import Info from '../../components/account/info'
import Order from '../../components/account/order'
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
    this.state = {
      orders: [
        {
          orderNumber: '1704127569257178',
          date: '2017-04-12',
          detail: [
            {
              name: '充电器',
              price: 29,
              account: 1,
              imgUrl: '/src/images/gerenzhongxin1.png'
            },
            {
              name: 'USB',
              price: 30,
              account: 2,
              imgUrl: '/src/images/gerenzhongxin2.png'
            }
          ]
        },
        {
          orderNumber: '1704127569257179',
          date: '2017-04-13',
          detail: [
            {
              name: '手机',
              price: 2499,
              account: 1,
              imgUrl: '/src/images/gerenzhongxin3.png'
            }
          ]
        }
      ]
    }
  }

  getDynamicComponent (currentMenu, props) {
    switch (currentMenu) {
      case 'order':
        return <Order orders={this.state.orders}/>
      case 'support':
        return <Support/>
      case 'info':
        return <Info/>
      case 'address':
        return <AddressContainer addresses={this.state.addresses}/>
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