import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './menu.scss'

class Menu extends Component {

  constructor (props) {
    super(props)

  }

  changeMenu = url => {}
  /*this.props.history.push(url)*/

  render () {

    const {currentMenu} = this.props

    const menus = [
      {name: 'order', describe: 'Order', url: '/account/order'},
      {name: 'support', describe: 'Support', url: '/account/support'},
      {name: 'info', describe: 'Info', url: '/account/info'},
      {name: 'address', describe: 'Address', url: '/account/address'},
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
                      <div key={index}>
                        <Link to={menu.url}>
                          <li className={menu.name === this.props.match.params.menu ? style.active : null}>
                            {menu.describe}
                          </li>
                        </Link>
                      </div>
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

export default Menu
