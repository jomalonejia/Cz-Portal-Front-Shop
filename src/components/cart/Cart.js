import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {Checkbox} from 'semantic-ui-react'

import style from './cart.scss'

class Cart extends Component {
  render () {

    const carts = [
      1
    ]

    console.log(carts.length)

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            购物清单
          </div>
          {
            carts.length > 0
              ? <div>
              <div className={style.inner}>

              </div>
              <div className={style.bottom}>
                <div className={style.operation}>
                  <div className={style.checkAll}>
                    <Checkbox label='全选'/>
                  </div>
                  <div className={style.deleteAll}>
                    删除选中商品
                  </div>

                </div>
                <div className={style.shipping}>
                  <div className={style.shippingBox}>
                    <div className={style.shippingNum}>
                      <h4 className={style.checkedCount}>已选择<i>1</i>件商品</h4>
                    </div>
                    <div className={style.shippingPrice}>
                      <h4 className={style.totalPrice}>应付总额:￥<i>199.00</i></h4>
                    </div>
                  </div>
                  <span>
                    <Link to="/">
                      现在结算
                    </Link>
                  </span>
                </div>
              </div>
            </div>
              : <div className={style.empty}>
              <h3>您的购物车中还没有商品</h3>
              <Link to='/'>Shopping</Link>
            </div>
          }

        </div>
      </div>
    )
  }
}

export default Cart