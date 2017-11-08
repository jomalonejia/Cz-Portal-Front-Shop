import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className='footer_menu'>
          <ul>
            <h5>订单服务</h5>
            <li><a href="#">购买指南</a></li>
            <li><a href="#">支付方式</a></li>
            <li><a href="#">送货政策</a></li>
          </ul>
          <ul>
            <h5>服务支持</h5>
            <li><a href="#">售后服务</a></li>
            <li><a href="#">维修门店</a></li>
            <li><a href="#">零售门店</a></li>
          </ul>
          <ul>
            <h5>自助服务</h5>
            <li><a href="#">热点咨询</a></li>
            <li><a href="#">预约购买</a></li>
            <li><a href="#">订单物流</a></li>
          </ul>
          <ul>
            <h5>媒体中心</h5>
            <li><a href="#">新闻动态</a></li>
            <li><a href="#">官方视频</a></li>
            <li><a href="#">图片资源</a></li>
          </ul>
          <ul>
            <h5>关于公司</h5>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
          <ul>
            <h5>关注我们</h5>
            <li><a href="#">新浪微博</a></li>
            <li><a href="#">官方微信</a></li>
            <li><a href="#">官方贴吧</a></li>
          </ul>
          <div className='footerright'>
            <h2>400-619-0909</h2>
            <h5>周一至周日 9:00-18:00（仅收市话费）</h5>
            <input type="button" value="?在线帮助"/>
          </div>
        </div>
        <div className='footer2'>
          <span>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</span>
          <input type="button" value="法律声明"/>
          <input type="button" value="隐私条款"/>
          <input type="button" value="开发者中心"/>
          <br/>
          <span>京ICP备14041720号-1&nbsp;&nbsp;&nbsp;京ICP证140622号&nbsp;&nbsp;&nbsp;京公网安备11010502025474</span>
        </div>
      </div>
    )
  }
}

export default Footer