import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import style from '../../styles/item.scss'
import 'semantic-ui-css/semantic.min.css';

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1,
      selectedImageIndex: 0
    }
  }

  changeCount (i) {
    let newCount = this.state.count + i
    this.setState({count: newCount})
  }

  changeImage (index) {
    this.setState({selectedImageIndex: index})
  }

  render () {
    const {match} = this.props

    let itemId = match.params.id

    const items = [
      {
        name: 'FIIL Diva 智能蓝牙无线降噪耳机',
        describe: '手势触控、智能启停',
        price: 998,
        params: [
          {
            name: '颜色',
            color: true,
            values: [
              '/src/images/color/gray.jpg',
              '/src/images/color/green.jpg',
              '/src/images/color/orange.jpg',
              '/src/images/color/purple.jpg'
            ]
          }
        ],
        catagory: 'headset',
        images: [
          '/src/images/pic/1.jpg',
          '/src/images/pic/2.jpg',
          '/src/images/pic/3.jpg',
          '/src/images/pic/4.jpg',
          '/src/images/pic/5.jpg'
        ],
        detailImages: [
          '/src/images/pic/d1.jpg',
          '/src/images/pic/d2.jpg',
          '/src/images/pic/d3.jpg',
          '/src/images/pic/d4.jpg',
          '/src/images/pic/d5.jpg',
          '/src/images/pic/d6.jpg',
          '/src/images/pic/d7.jpg',
          '/src/images/pic/d8.jpg',
          '/src/images/pic/d9.jpg',
          '/src/images/pic/d10.jpg',
          '/src/images/pic/d11.jpg',
          '/src/images/pic/d12.jpg',
          '/src/images/pic/d13.jpg',
          '/src/images/pic/d14.jpg',
          '/src/images/pic/d15.jpg',
          '/src/images/pic/d16.jpg',
          '/src/images/pic/d17.jpg',
          '/src/images/pic/d18.jpg',
          '/src/images/pic/d19.jpg',
          '/src/images/pic/d20.jpg',
          '/src/images/pic/d21.jpg',
          '/src/images/pic/d22.jpg',

        ]
      },
      {
        name: '《深泽直人》',
        describe: '首次面向中国读者介绍其作品',
        price: 999,
        params: [
          {
            name: '版本',
            values: [
              '平装版',
              '精装版'
            ]
          }
        ],
        catagory: 'book',
        images: [
          '/src/images/pic/book.jpg'
        ],
        detailImages: [
          '/src/images/pic/book1.jpg',
          '/src/images/pic/book1_1.jpg',
          '/src/images/pic/book2.jpg',
          '/src/images/pic/book3.jpg',
          '/src/images/pic/book4.jpg',
          '/src/images/pic/book5.jpg',
          '/src/images/pic/book6.jpg',
          '/src/images/pic/book7.jpg',
          '/src/images/pic/book8.jpg',
          '/src/images/pic/book9.jpg'
        ]
      }
    ]

    return (
      <div>
        <div className={style.main}>
          <div id="graybox" className={style.grayBox}>
            <div className={style.wrapper}>
              <div className={style.gallery}>
                <div className={style.thumbNail}>
                  <ul>
                    {
                      items[itemId].images.map((imageUrl, index) => (
                        <li onClick={this.changeImage.bind(this, index)} key={index}>
                          <img src={imageUrl}
                               className={index === this.state.selectedImageIndex ? style.imageShow : null}/>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={style.thumb}>
                  <ul>
                    {
                      items[itemId].images.map((imageUrl, index) => (
                        <li key={index} className={index === this.state.selectedImageIndex ? style.thumbShow : null}>
                          <img src={imageUrl}/>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className={style.banner}>
              <div className={style.titleText}>
                <div className={style.price}>
                 <span className={style.priceSpan}>
                 <em>￥</em>{items[itemId].price}
                 </span>
                </div>
                <div className={style.itemsInfo}>
                  <div className={style.textName}>
                    <h4>{items[itemId].name}</h4>
                    <h5>{items[itemId].describe}</h5>
                  </div>
                </div>
              </div>


              <div className={style.param}>
                {
                  items[itemId].params.map((param, index) => {
                    return (
                      <div key={index} className={style.paramArea}>
                        <span className={style.paramName}>{param.name}</span>
                        <ul className={style.paramValues}>
                          {
                            <li key={index}>
                              <ul>
                                {
                                  !param.color ? param.values.map((value, paramIndex) => (
                                    <li key={paramIndex}>
                                      <NavLink  to="/">
                                      <span
                                        className={[style.paramValue, paramIndex === 0 ? style.paramActive : ''].join(' ')}>
                                       {value}
                                      </span>
                                      </NavLink>
                                    </li>
                                  )) : (param.values ? param.values.map((value, paramIndex) => (
                                    <li key={paramIndex}>
                                      <NavLink  to="/">
                                      <span
                                        className={[style.paramValue, style.paramCircle, paramIndex === 0 ? style.paramActive : ''].join(' ')}>
                                          <img className={style.paramColor} src={value}/>
                                      </span>
                                      </NavLink>
                                    </li>
                                  )) : null)
                                }
                              </ul>
                            </li>
                          }
                        </ul>
                      </div>
                    )
                  })
                }

                <div className={style.paramArea}>
                  <span className={style.paramName}>数量</span>
                  <div className={style.countArea}>
                    <span onClick={this.state.count > 1 ? this.changeCount.bind(this, -1) : null}
                          className={style.countIconArea}>
                      {/*<Icon type="minus-circle-o" className={style.countIcon}/>*/}
                    </span>
                    <span className={style.countAmount}>
                      {this.state.count}
                    </span>
                    <span className={style.countIconArea}>
                      {/*<Icon type="plus-circle-o" onClick={this.changeCount.bind(this, 1)} className={style.countIcon}/>*/}
                    </span>
                  </div>
                </div>
              </div>


              <div className={style.buyNow}>
                <div className={style.buttonText}>
                  <div className={style.buttonBar}>
                    <span className={style.blueBtn}>加入购物车</span>
                    <span className={style.grayBtn}>现在购买</span>

                    <div className={style.warning}>
                      <p>* 非质量问题退货，需保证塑封且完好，不影响二次销售。已经拆封或有人为损坏影响二次销售的图书不支持 7 天无理由退货。</p>

                      <p>* 7 天无理由退货，15 天免费换货，满 150 元免运费。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="pm" className={style.pm}>
            <div className={style.pmTitle}>
              <h2>产品信息</h2>
            </div>
            <div className={style.allPic}>
              {
                items[itemId].detailImages.map((imageUrl, index) => (
                  <img key={index} src={imageUrl}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item