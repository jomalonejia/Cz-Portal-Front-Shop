import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';
import {accountActions} from '../../actions/account'
import {getCurrentAccountMenu} from '../../selectors/account'

import style from './account.scss'

class Menu extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.testSaga('aluba');
  }

  render () {
    const {currentAccountMenu} = this.props;

    const menus = [
      {name: 'order', describe: '我的订单', url: '/'},
      {name: 'support', describe: '售后服务', url: '/'},
      {name: 'info', describe: '账户资料', url: '/'},
      {name: 'address', describe: '收货地址', url: '/'},
    ]

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.sidebar}>
            <div className={style.avatar}>
              <div className={style.profile}>
                <img src='/src/images/profile.jpg'/>
              </div>
              <div className={style.inner}>
                <ul>
                  {
                    menus.map((menu, index) => (
                      <li key={index}>
                        {/* <NavLink to={menu.url}>*/}
                        {/*{menu.name}*/}
                        {currentAccountMenu}
                        {/*</NavLink>*/}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className={style.content}>

          </div>
        </div>
      </div>
    )
  }
}

export default Account
