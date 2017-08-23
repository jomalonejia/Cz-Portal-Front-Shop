import React, { Component } from 'react'
import style from '../../styles/item.css'

class Item extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {match} = this.props
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
                      <img src="/src/images/pic/book.jpg"/>
                    </li>
                  </ul>
                </div>
                <div className={style.thumb}>
                  <ul>
                    <li>
                      <img src="/src/images/pic/book.jpg"/>
                    </li>
                    <li className={style.thumbLi}>
                      <img src="#"/>
                    </li>
                    <li className={style.thumbLi}>
                      <img src="#"/>
                    </li>
                    <li className={style.thumbLi}>
                      <img src="#"/>
                    </li>
                    <li className={style.thumbLi}>
                      <img src="#"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={style.banner}>
              <div className={style.titleText}>
                <div className={style.price}>
             <span className={style.priceSpan}>
             <em>￥</em>199
             </span>
                </div>
                <div className={style.itemsInfo}>
                  <div className={style.textName}>
                    <h4>《深泽直人》</h4>
                    <h5>首次面向中国读者介绍其作品</h5>
                  </div>
                </div>
              </div>

              <div className={style.colorNumber}>
                <div className={style.colorArea}>
                  <span className={style.colorSpan}>版本</span>
                  <ul className={style.colorUl}>
                    <li className={style.pingzhuang}>
                      <a >
                        <span className={style.colorIcon}>
                          平装版
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={style.numArea}>
                  <div className={style.numText}>数量
                  </div>
                  <div className={style.minusAdd}>
                    <a href="#">
									<span className={style.minusIcon}>
      								<img src="/src/images/img/minus.jpg"/>
      								</span>
                    </a>
                    <span className={style.inputArea}>
      								1
      							</span>
                    <a href="#">
									<span className={style.addIcon}>
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
                    <span className={style.whiteBtn}><a>现在购买</a></span>

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
              <img src="/src/images/pic/book1.jpg"/>
              <img src="/src/images/pic/book1_1.jpg"/>
              <img src="/src/images/pic/book2.jpg"/>
              <img src="/src/images/pic/book3.jpg"/>
              <img src="/src/images/pic/book4.jpg"/>
              <img src="/src/images/pic/book5.jpg"/>
              <img src="/src/images/pic/book6.jpg"/>
              <img src="/src/images/pic/book7.jpg"/>
              <img src="/src/images/pic/book8.jpg"/>
              <img src="/src/images/pic/book9.jpg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item