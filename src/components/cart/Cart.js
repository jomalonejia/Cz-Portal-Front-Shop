import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'
import BlueBtn from '../components/blueBtn'
import ItemCount from '../components/itemCount'

import style from './cart.scss'

class Cart extends Component {

  change = i => console.log(i)

  render () {

    const carts = [
      0
    ]

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className="title">
            <h2>购物清单</h2>
          </div>
          {
            carts.length > 0
              ? <div>
              <div className={style.inner}>
                <div className={style.cartTableTitle}>
                  <span className={style.cartTableName}>商品信息</span>
                  <span className={style.cartTableOperation}>操作</span>
                  <span className={style.cartTableSubtotal}>小计</span>
                  <span className={style.cartTableNumber}>数量</span>
                  <span className={style.cartTablePrice}>单价</span>
                </div>
                <div className={style.cartTable}>
                  <div className={style.cartItems}>
                    <div className={style.itemCheck}>
                      <Checkbox label="选择"/>
                    </div>
                    <div className={style.itemThumb}>
                      <img alt="Smartisan M1/M1L 软胶保护套"
                           src="http://image.smartisanos.cn/resource/ff6e3d787c07983fa4c2c281c48e03c9.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/>
                    </div>
                    <div className={style.itemName}>
                      <div className={style.itemNameTable}>
                        <a href="#/item/100022302"
                           title="Smartisan M1/M1L 软胶保护套"
                           target="_blank">Smartisan M1/M1L 软胶保护套</a>
                        <ul>
                          <li>红色</li>
                          <li>适用于 Smartisan M1L</li>
                        </ul>

                      </div>
                    </div>
                    <div className={style.itemPrice}>
                      ￥&nbsp;49.00
                    </div>
                    <div className={style.itemNumber}>
                      <div className={style.itemNumberWrapper}>
                        <ItemCount changeCount={this.change}/>
                      </div>
                    </div>
                    <div className={style.itemSubtotal}>
                      ￥&nbsp;249.00
                    </div>
                    <div className={style.itemOperation}>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.bottom}>
                <div className={style.cartOperation}>
                  <div className={style.checkAll}>
                    <Checkbox label="全选"/>
                  </div>
                  <div className={style.deleteAll}>
                    删除选中商品
                  </div>
                </div>
                <div className={style.checkoutOperationBlock}>
                  <div className={style.checkoutMessage}>
                    <div className={style.checkoutNumber}>
                      <h4>已选择<i>3</i>件商品</h4>
                      <h5>共计<i>3</i>件商品</h5>
                    </div>
                    <div className={style.checkoutPrice}>
                      <h4>应付总额：<span>￥</span><i>467.00</i></h4>
                      <h5>总额节省：<span>￥</span><i>30.00</i></h5>
                    </div>
                  </div>
                  <div className={style.checkoutOperation}>
                    <BlueBtn text="现在结算"/>
                  </div>
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