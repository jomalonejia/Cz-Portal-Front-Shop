import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './checkout.scss'
import BlueBtn from '../components/blueBtn'

class Checkout extends Component {

  constructor (props){
    super(props)
  }

  render () {

    const {carts=[]} = this.props

    console.log(carts)

    return (
      <div className={style.main}>
        <div className={style.checkoutAddress}>
          <div className="title">
            <h2>收获信息</h2>
          </div>
          <div className={style.addressPanel}>
            <ul className={style.addressItemList}>
              <li className={`${style.addressItem} ${style.activate}`}>
                <div className={style.addressInfo}>
                  <span className={style.nameSection}>123(默认地址)</span>
                  <span className={style.mobileSection}>1381381338</span>
                  <span className={style.detailSection}>北京市东城区&nbsp;215134</span>
                </div>
                <div className={style.operationSection}>
                  <span>修改</span>
                  <span>删除</span>
                </div>
              </li>
              <li className={style.addressItem}>
                <div className={style.addressInfo}>
                  <span className={style.nameSection}>123(默认地址)</span>
                  <span className={style.mobileSection}>1381381338</span>
                  <span className={style.detailSection}>北京市东城区&nbsp;215134</span>
                </div>
                <div className={style.operationSection}>
                  <span>修改</span>
                  <span>删除</span>
                </div>
              </li>
              <li className={`${style.addressItem} ${style.addressAdd}`}>
                <div className={style.addressInfo}>
                  <p>使用新地址</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.orderList}>
          <div className="title">
            <h2>购物清单</h2>
          </div>
          <div className={style.cart}>
            <div className={style.cartTitle}>
              <span className={style.name}>商品名称</span>
              <span className={style.subtotal}>小计</span>
              <span className={style.num}>数量</span>
              <span className={style.price}>单价</span>
            </div>
            <div className={style.cartTable}>
              <div className={style.cartGroup}>
                {
                  carts.map((cart,index) =>
                    <div key={cart.id} className={style.cartItem}>
                      <div className={style.itemsThumb}>
                        <Link to={`/item/${cart.itemId}`}>
                          <img src={cart.image}/>
                        </Link>
                      </div>
                      <div className={style.name}>
                        <div className={style.nameCell}>
                          <Link to={`/item/${cart.itemId}`}>
                            {cart.itemDescribe}
                          </Link>
                        </div>
                      </div>
                      <div className={style.subtotal}>
                        <div className={style.subtotalCell}>
                          <strong>￥&nbsp;{cart.price * cart.count}</strong>
                        </div>
                      </div>
                      <div className={style.num}>{cart.count}</div>
                      <div className={style.price}>￥&nbsp;{cart.price}</div>
                    </div>
                  )}
                <div className={style.cartItem}>
                  <div className={style.itemsThumb}>
                    <a href="http://www.smartisan.com/shop/#/item/100022302" title="Smartisan M1L 软胶保护套（红色）"
                       target="_blank">
                      <img
                        src="http://image.smartisanos.cn/resource/ff6e3d787c07983fa4c2c281c48e03c9.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/>
                    </a>
                  </div>
                  <div className={style.name}>
                    <div className={style.nameCell}>
                      <a href="http://www.smartisan.com/shop/#/item/100027001"
                         title="Smartisan S-1001 圈铁线控耳机（银色，3.5 mm）" target="_blank">Smartisan S-1001 圈铁线控耳机（银色，3.5
                        mm）</a>
                    </div>
                  </div>
                  <div className={style.subtotal}>
                    <div className={style.subtotalCell}>
                      <strong>￥&nbsp;199.00</strong>
                    </div>
                  </div>
                  <div className={style.num}>1</div>
                  <div className={style.price}>￥&nbsp;199.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.orderDiscount}>
            <p>
              商品总计：
              <span><strong>￥&nbsp;497.00</strong></span>
            </p>
            <p>
              运费：
              <span><strong>￥&nbsp;00.00</strong></span>
            </p>
            <p>
              优惠：
              <span><strong>￥&nbsp;30.00</strong></span>
            </p>
          </div>
          <div>
            <div className={style.payment}>
              <BlueBtn text="提交订单"/>
              <div className={style.price}>
                应付金额:
                <em>￥&nbsp;467.00</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout