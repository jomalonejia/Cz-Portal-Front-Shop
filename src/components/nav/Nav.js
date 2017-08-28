import React, { Component } from 'react';
import '../../styles/nav.css';

class Nav extends Component{
  render(){
    const navs = [
        {name: '首页', href: '/'},
        {name: '手机', href: '/'},
        {name: '"足迹系列"手感膜', href: '/'},
        {name: '官方配件', href: '/'},
        {name: '周边产品', href: '/'},
        {name: '第三方配件', href: '/'},
        {name: '全部商品', href: '/'},
        {name: '服务', href: '/'}
      ];
    return(
      <div className='nav'>
        <ul>
          {
            navs.map((menu, index) => (
              <li key={index}>
                <a className={index === 0 ? 'active' : ''} href={menu.href}>{menu.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default Nav;