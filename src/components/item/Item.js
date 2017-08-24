import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import style from '../../styles/item.scss'

class Item extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {match} = this.props

    const items = [
      {
        name: '《深泽直人》',
        describe: '首次面向中国读者介绍其作品',
        price: 999,
        params: [
          {
           name:'颜色',
           color:true,
           values:[
           'red','black','white'
           ]
           },
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
                  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                  <br /> <br /> <br /> <br />
                  <ul>
                    <li >
                      <img src={items[0].images[0]}/>
                    </li>
                  </ul>
                </div>
                <div className={style.thumb}>
                  <ul>
                    {
                      items[0].images.map((imageUrl, index) => (
                        <li key={index}>
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
                 <em>￥</em>{items[0].price}
                 </span>
                </div>
                <div className={style.itemsInfo}>
                  <div className={style.textName}>
                    <h4>{items[0].name}</h4>
                    <h5>{items[0].describe}</h5>
                  </div>
                </div>
              </div>


              <div className={style.param}>
                {
                  items[0].params.map((param, index) => {
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
                                    <NavLink activeClassName={style.linkStyle} to="/">
                                      <span className={[style.paramValue, paramIndex === 0 ? style.paramActive : ''].join(' ')} >
                                       {value}
                                      </span>
                                    </NavLink>
                                  </li>
                                )) : param.values.map((value, paramIndex) => (
                                  <li key={paramIndex}>
                                    <NavLink activeClassName={style.linkStyle} to="/">
                                      <span className={[style.paramValue, style.paramCircle, paramIndex === 0 ? style.paramActive : ''].join(' ')} >
                                          <i className={style.paramColor}></i>
                                      </span>
                                    </NavLink>
                                  </li>
                                ))
                              }
                            </ul>
                          </li>
                        }
                      </ul>
                    </div>
                  )})
                }

                <div className={style.paramArea}>
                  <span className={style.paramName}>数量</span>
                  <div className={style.number}>
                    <a href="#">
                      <span className={style.numberIcon}>
                          <img src="/src/images/img/minus.jpg"/>
                      </span>
                    </a>
                    <span className={style.inputArea}>
                        1
                      </span>
                    <a href="#">
                      <span className={style.numberIcon}>
                          <img src="/src/images/img/plus.jpg"/>
                      </span>
                    </a>
                  </div>
                </div>
              </div>


              <div className={style.buyNow}>
                <div className={style.buttonText}>
                  <div className={style.buttonBar}>
                    <span className={style.blueBtn}><a>加入购物车</a></span>
                    <span className={style.grayBtn}><a>现在购买</a></span>

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
                items[0].detailImages.map((imageUrl, index) => (
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