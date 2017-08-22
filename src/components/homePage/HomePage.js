import React, { Component } from 'react'
import TiUserAdd from 'react-icons/lib/ti/user'
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart'
import style from '../../styles/homePage.css'

class HomePage extends Component {

  constructor () {
    super()
    this.state = {
      activeIndex: 0
    }
  }

  componentDidMount () {
    this.autoPlay(0)
  }

  componentWillUnmount () {
    clearInterval(this.timeout)
  }

  autoPlay (i) {
    this.timeout = setInterval(() => {
      this.setState({
        activeIndex: i
      })
      i++
      if (i === 4) i = 0
    }, 2000)
  }

  togglePicture (index, event) {
    clearInterval(this.timeout)
    this.setState({
      activeIndex: index
    })
    setTimeout(this.autoPlay(index), 5000)
  }

  render () {

    const carousels = [
        {src: 'src/images/banner1.png'},
        {src: 'src/images/banner2.png'},
        {src: 'src/images/banner1.png'},
        {src: 'src/images/banner2.png'}
      ],
      menus = [
        {name: '在线商城', href: '/'},
        {name: '坚果Pro', href: '/'},
        {name: 'Smartisan M1/M1L', href: '/'},
        {name: 'Smartisan OS', href: '/'},
        {name: '欢喜云', href: '/'},
        {name: '应用下载', href: '/'},
        {name: '官方论坛', href: '/'}
      ],
      navs = [
        {name: '首页', href: '/'},
        {name: '手机', href: '/'},
        {name: '"足迹系列"手感膜', href: '/'},
        {name: '官方配件', href: '/'},
        {name: '周边产品', href: '/'},
        {name: '第三方配件', href: '/'},
        {name: '全部商品', href: '/'},
        {name: '服务', href: '/'}
      ],
      smPanels = [
        {src: 'src/images/panelad01.jpg', href: ''},
        {src: 'src/images/panelad02.jpg', href: ''},
        {src: 'src/images/panelad03.jpg', href: ''},
        {src: 'src/images/panelad04.jpg', href: ''},
      ],
      hotItems = [
        {
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_a1.jpg',
            'src/images/shangpin_a2.jpg'
          ]
        },
        {
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_b1.jpg',
          ]
        },
        {
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_c1.jpg',
          ]
        },
        {
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_d1.jpg',
            'src/images/shangpin_d2.jpg',
            'src/images/shangpin_d3.jpg'
          ]
        }
      ],
      recommendItems=[
        {
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_a1.jpg'
          ]
        },
{
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_a2.jpg'
          ]
        },
{
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_b1.jpg'
          ]
        },
{
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_d2.jpg'
          ]
        },
{
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_c1.jpg'
          ]
        },
{
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_c2.jpg'
          ]
        },

      ]
    return (
      <div>
        <div className={style.head}>
          <div className={style.logo}>
            <img alt="" src="src/images/logo.png"/>
          </div>
          <div className={style.menu}>
            <ul>
              {
                menus.map((menu, index) => (
                  <li key={index}><a href={menu.href}>{menu.name}</a></li>
                ))
              }
            </ul>
          </div>
          <div id="test" className={style.icon}>
            <a href="/" className="cart"><TiUserAdd size={30}/></a>
            <a href="/"><TiShoppingCart size={30}/></a>
            <span>0</span>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.nav}>
            <ul>
              {
                navs.map((menu, index) => (
                  <li key={index}><a href={menu.href}>{menu.name}</a></li>
                ))
              }
            </ul>
          </div>
          <div className={style.carousel}>
            <ul className={style.carouselToggle}>
              {
                carousels.map((carousel, index) => (
                  <li
                    key={index} className={index == this.state.activeIndex ? style.toggleActive : ''}
                    onClick={this.togglePicture.bind(this, index)}>
                  </li>
                ))
              }
            </ul>
            <ul className={style.carouselMask}>
              {
                carousels.map((carousel, index) => (
                  <li key={index} className={index == this.state.activeIndex ? style.active : ''}>
                    <img src={carousel.src}/>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={[style.panel, style.smPanel].join(' ')}>
            <ul >
              {
                smPanels.map((smPanel, index) => (
                  <li key={index}><img src={smPanel.src}/><a href={smPanel.href}></a></li>
                ))
              }
            </ul>
          </div>
          <div className={[style.panel, style.mdPanel].join(' ')}>
            <h2 className={style.title}>热门商品</h2>
            <ul className={style.cont}>
              {
                hotItems.map((item, index) => (
                  <li key={index} className={style.items}>
                    <div className={style.imgCover}>
                      {
                        item.images.map((image, index) => (
                          <img key={index} src={image}/>
                        ))
                      }
                    </div>
                    <div className={style.infos}>
                      <h6>{item.name}</h6>
                      <p>{item.describe}</p>
                    </div>
                    <ul className={style.dot}>
                      <li className={style.active}>
                        <div><span></span></div>
                      </li>
                    </ul>
                    <p className={style.price}>￥ {item.price}</p>
                    <div className={style.operation}>
                      <a>查看详情</a>
                      <a>加入购物车</a>
                    </div>
                    <a className={style.itemLink} href="#"></a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={[style.panel, style.bgPanel].join(' ')}>
            <h2 className={style.title}>官方精选</h2>
            <ul className={style.cont}>
              <li className={[style.items,style.firstItem].join(' ')}>
                <img src="src/images/phone.jpg"/>
                  <a className={style.itemLink} href="#"></a>
              </li>
              {
                recommendItems.map((item,index) => (
                  <li key={index} className={style.items}>
                    <div className={style.imgCover}>
                      {
                        item.images.map((image, index) => (
                          <img key={index} src={image}/>
                        ))
                      }
                    </div>
                    <div className={style.infos}>
                      <h6>{item.name}</h6>
                      <p>{item.describe}</p>
                    </div>
                    <ul className={style.dot}>
                      <li className={style.active}>
                        <div><span></span></div>
                      </li>
                    </ul>
                    <p className={style.price}>￥ {item.price}</p>
                    <div className={style.operation}>
                      <a>查看详情</a>
                      <a>加入购物车</a>
                    </div>
                    <a className={style.itemLink} href="#"></a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={style.forum}>
            <div className={style.logo}>
              <span>&nbsp;&nbsp;论坛精选</span>
              <input type="button" value="前往论坛<"/>
            </div>
            <div className={style.items}>
              <img src="src/images/photo29.png" alt="商品"/>
              <img src="src/images/photo30.png" alt="商品"/>
              <img src="src/images/photo31.png" alt="商品"/>
              <img src="src/images/photo32.png" alt="商品"/>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.footer_menu}>
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
            <div className={style.footerright}>
              <h2>400-619-0909</h2>
              <h5>周一至周日 9:00-18:00（仅收市话费）</h5>
              <input type="button" value="?在线帮助"/>
            </div>
          </div>
          <div className={style.footer2}>
            <span>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</span>
            <input type="button" value="法律声明"/>
            <input type="button" value="隐私条款"/>
            <input type="button" value="开发者中心"/>
            <br/>
            <span>京ICP备14041720号-1&nbsp;&nbsp;&nbsp;京ICP证140622号&nbsp;&nbsp;&nbsp;京公网安备11010502025474</span>
            <select>
              <option value="中文">中文</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>

  )
  }
  }
  export default HomePage