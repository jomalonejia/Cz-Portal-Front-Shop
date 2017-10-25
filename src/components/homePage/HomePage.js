import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './homePage.scss'

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
      smPanels = [
        {src: 'src/images/panelad01.jpg', href: ''},
        {src: 'src/images/panelad02.jpg', href: ''},
        {src: 'src/images/panelad03.jpg', href: ''},
        {src: 'src/images/panelad04.jpg', href: ''},
      ],
      hotItems = [
        {
          itemId: 0,
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_a1.jpg',
            'src/images/shangpin_a2.jpg'
          ]
        },
        {
          itemId: 1,
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_b1.jpg',
          ]
        },
        {
          itemId: 2,
          name: 'FIIL Diva 智能蓝牙无线降噪耳机',
          describe: '手势触控、智能启停',
          price: 999,
          images: [
            'src/images/shangpin_c1.jpg',
          ]
        },
        {
          itemId: 3,
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
      recommendItems = [
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
            'src/images/shangpin_d3.jpg'
          ]
        },

      ]
    return (
      <div>
        <div className={style.body}>
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
                  <li key={index}>
                    <Link to="item/1">
                      <img src={smPanel.src}/>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={[style.panel, style.mdPanel].join(' ')}>
            <h2 className={style.title}>热门商品</h2>
            <ul className={style.cont}>
              {
                hotItems.map((item, index) => (
                  <div key={index}>

                    <li className={style.items}>
                      <div className={style.imgCover}>
                        {
                          item.images.map((image, index) => (
                            <div key={index}>
                              <Link to={`/item/${item.itemId}`}>
                                <img src={image}/>
                              </Link>
                            </div>
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
                        <Link to='/item/123'>查看详情</Link>
                        <Link to='/item/123'>加入购物车</Link>
                      </div>
                    </li>

                  </div>
                ))
              }
            </ul>
          </div>
          <div className={[style.panel, style.bgPanel].join(' ')}>
            <h2 className={style.title}>官方精选</h2>
            <ul className={style.cont}>
              <li className={[style.items, style.firstItem].join(' ')}>
                <Link to="/item/123"><img src="src/images/phone.jpg"/></Link>
              </li>
              {
                recommendItems.map((item, index) => (
                  <li key={index} className={style.items}>
                    <div className={style.imgCover}>
                      {
                        item.images.map((image, index) => (
                          <div key={index}>
                            <Link to="/item/123"><img key={index} src={image}/></Link>
                          </div>
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
                      <Link to="/item/123">查看详情</Link>
                      <Link to="/item/123">加入购物车</Link>
                    </div>
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
      </div>
    )
  }
}
export default HomePage