import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/components/icon.css'
import style from './item.scss'

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

    const item = this.props.item;

    return (
      <div>
        <div className={style.main}>
          <div id="graybox" className={style.grayBox}>
            <div className={style.wrapper}>
              <div className={style.gallery}>
                <div className={style.thumbNail}>
                  <ul>
                    {
                      item.images.map((imageUrl, index) => (
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
                      item.images.map((imageUrl, index) => (
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
                 <em>￥</em>{item.price}
                 </span>
                </div>
                <div className={style.itemsInfo}>
                  <div className={style.textName}>
                    <h4>{item.name}</h4>
                    <h5>{item.describe}</h5>
                  </div>
                </div>
              </div>


              <div className={style.param}>
                {
                  item.params.map((param, index) => {
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
                                      <NavLink to="/">
                                      <span
                                        className={[style.paramValue, paramIndex === 0 ? style.paramActive : ''].join(' ')}>
                                       {value}
                                      </span>
                                      </NavLink>
                                    </li>
                                  )) : (param.values ? param.values.map((value, paramIndex) => (
                                    <li key={paramIndex}>
                                      <NavLink to="/">
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
                          className={style.countMinus}>
                      <Icon name='minus circle'  className={style.countIcon}/>
                    </span>
                    <span className={style.countAmount}>
                      {this.state.count}
                    </span>
                    <span onClick={this.changeCount.bind(this,1)}
                          className={style.countPlus}>
                      <Icon name='add circle'  className={style.countIcon}/>
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
                item.detailImages.map((imageUrl, index) => (
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