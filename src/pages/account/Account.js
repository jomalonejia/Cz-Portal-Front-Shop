import React, { Component } from 'react'
import { connect } from 'react-redux'
import {profileSelector} from 'src/selectors/user'
import MenuComponent from './components/menu'
import Address from './Address'
import Order from './Order'
import Support from './Support'
import Info from './Info'

@connect(
  state => profileSelector,
  null)
export default class Account extends Component {
  constructor (props) {
    super(props)
  }

  getDynamicComponent (currentMenu, props) {
    switch (currentMenu) {
      case 'support':
        return <Support/>
      case 'info':
        return <Info/>
      case 'address':
        return <Address/>
      default:
        return <Order/>
    }
  }

  render () {

    const {match} = this.props

    let currentMenu = match.params.menu

    return (
      <div className="accountContent">
        <MenuComponent {...this.props}/>
        {this.getDynamicComponent(currentMenu)}
      </div>
    )

  }
}