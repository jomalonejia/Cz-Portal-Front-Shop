import React,{Component} from 'react';
import navStyle from '../../styles/nav.css'

class Nav extends Component{
  render(){
    return (
        <div className={navStyle.nav}>
          <ul>
            <li><a href="#" className={navStyle.active}>首页</a></li>
            <li><a href="#">手机</a></li>
            <li><a href="#">"足迹系列"手感膜</a></li>
            <li><a href="#">官方配件</a></li>
            <li><a href="#">周边产品</a></li>
            <li><a href="#">第三方配件</a></li>
            <li><a href="#">全部商品</a></li>
            <li><a href="#">服务</a></li>
          </ul>
        </div>
    )
  }
}

export default Nav