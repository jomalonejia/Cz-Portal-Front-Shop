import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TiUserAdd from 'react-icons/lib/ti/user';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import  './header.css';

class Header extends Component {

  render () {

    const menus = [
      {name: '在线商城', href: '/'},
      {name: '坚果Pro', href: '/'},
      {name: 'Smartisan M1/M1L', href: '/'},
      {name: 'Smartisan OS', href: '/'},
      {name: '欢喜云', href: '/'},
      {name: '应用下载', href: '/'},
      {name: '官方论坛', href: '/'}
    ]

    return (
      <div className="head">
        <div className="logo">
          <img alt="" src="/src/images/logo.png"/>
        </div>
        <div className="menu">
          <ul>
            {
              menus.map((menu, index) => (
                <li key={index}><a href={menu.href}>{menu.name}</a></li>
              ))
            }
          </ul>
        </div>
        <div id="test" className="icon">
          <Link to="/account"><TiUserAdd size={30}/></Link>
          <Link to="/cart"><TiShoppingCart size={30}/></Link>
          <span>0</span>
        </div>
      </div>
    )
  }
}

export default Header