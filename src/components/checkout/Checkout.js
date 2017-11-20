import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './checkout.scss'
import BlueBtn from '../components/blueBtn'

class Checkout extends Component {

  constructor (props){
    super(props)
  }

  render () {

    const {carts=[],addresses=[]} = this.props

    console.log(addresses)

    return (
      <div className={style.main}>
        <div className={style.checkoutAddress}>
          <div className="title">
            <h2>收获信息</h2>
          </div>
          <div className={style.addressPanel}>
            <ul className={style.addressItemList}>
              {
                addresses.map((address,index) =>
                  <li key={address.id} className={`${style.addressItem} ${address.defaultAddress ? style.activate : null}`}>
                    <div className={style.addressInfo}>
                      <span className={style.nameSection}>{address.fullName}{address.defaultAddress ? `(default)` : null}</span>
                      <span className={style.mobileSection}>{address.phoneNumber}</span>
                      <span className={style.detailSection}>{address.country}&nbsp;{address.province}&nbsp;{address.city}&nbsp;{address.address}&nbsp;{address.zip}</span>
                    </div>
                    <div className={style.operationSection}>
                      <span>update</span>
                      <span>delete</span>
                    </div>
                  </li>
                )
              }
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
              <span className={style.discount}>折扣</span>
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
                            {cart.itemName}
                          </Link>
                        </div>
                      </div>
                      <div className={style.subtotal}>
                        <div className={style.subtotalCell}>
                          <strong>{Number(cart.price * cart.count*cart.discount).toFixed(2)}</strong>
                        </div>
                      </div>
                      <div className={style.num}>{cart.count}</div>
                      <div className={style.price}>￥&nbsp;{cart.price}</div>
                      <div className={style.discount}>{cart.discount*100}%</div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className={style.orderDiscount}>
            <p>
              商品总计：
              <span><strong>￥&nbsp;{carts.reduce((sum,cart) => sum + cart.price * cart.count,0)}</strong></span>
            </p>
            <p>
              运费：
              <span><strong>￥&nbsp;{carts.reduce((sum,cart) => sum + cart.postFee ,0)}</strong></span>
            </p>
            <p>
              优惠：
              <span><strong>￥&nbsp;{Number(carts.reduce((sum,cart) => sum + cart.price * cart.count * (1 - cart.discount),0)).toFixed(2)}</strong></span>
            </p>
          </div>
          <div>
            <div className={style.payment}>
              <BlueBtn text="提交订单"/>
              <div className={style.price}>
                应付金额:
                <em>￥&nbsp;{Number(carts.reduce((sum,cart) => sum + cart.price * cart.count * cart.discount,0)).toFixed(2)}</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkout