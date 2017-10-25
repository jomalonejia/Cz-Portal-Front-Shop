import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from '../../components/account/menu';
import Address from '../../components/account/address';
import Info from '../../components/account/info';
import Order from '../../components/account/order';
import Support from '../../components/account/support';
import { getMenuSelector } from '../../selectors/account/menu';
import * as accountActions from '../../actions/account';
import * as accountMenuConstants from '../../constants/menu.constants';

@connect(
  state => getMenuSelector,
  dispatch => bindActionCreators({...accountActions}, dispatch))
export default class AccountContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const {currentAccountMenu} = this.props

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

    const orders = [
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

    const menus = [
      {name: 'order', describe: '我的订单', url: '/account/order'},
      {name: 'support', describe: '售后服务', url: '/account/support'},
      {name: 'info', describe: '账户资料', url: '/account/info'},
      {name: 'address', describe: '收货地址', url: '/account/address'},
    ]

     return function  () {

      /*}() => {*/
        switch (currentAccountMenu) {
          case 'order':
            return <h1>order</h1>
          case 'support':
            return <h1>support</h1>
          case 'info':
            return <h1>info</h1>
          case 'address':
            return <h1>address</h1>
          default:
            return null
        }
      }
  }
}