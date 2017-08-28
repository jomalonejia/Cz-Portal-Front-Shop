import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import style from '../../styles/account/account.scss'

class Account extends Component{
  render(){

    const menus = [
      {name:'我的订单',url:'/'},
      {name:'售后服务',url:'/'},
      {name:'账户资料',url:'/'},
      {name:'收货地址',url:'/'},
    ]

    return(
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
                    menus.map((menu,index) => (
                    <li key={index}>
                      <NavLink to={menu.url}>
                        {menu.name}
                      </NavLink>
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