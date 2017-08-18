import React, { Component } from 'react';
import TiUserAdd from 'react-icons/lib/ti/user'
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart'
import headerStyle from '../../styles/header.css'

class Header extends Component{
  render(){
    return (
       <div className={headerStyle.head}>
         <div className={headerStyle.logo}>
           <img alt="" src="src/images/logo.png"/>
         </div>
         <div className={headerStyle.menu}>
           <ul>
             <li><a href="/">在线商城</a></li>
             <li><a href="/">坚果Pro</a></li>
             <li><a href="/">Smartisan M1/M1L</a></li>
             <li><a href="/">Smartisan OS</a></li>
             <li><a href="/">欢喜云</a></li>
             <li><a href="/">应用下载</a></li>
             <li><a href="/">官方论坛</a></li>
           </ul>
         </div>
         <div id="test" className={headerStyle.icon}>
           <a href="/" className="cart"><TiUserAdd size={30}/></a>
           <a href="/" ><TiShoppingCart size={30}/></a>
           <span>0</span>
         </div>
       </div>
    )
  }
}
export default Header;