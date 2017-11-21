import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'
import BlueBtn from '../components/blueBtn'
import ItemCount from '../components/itemCount'
import store from '../../store'
import * as cartActions from '../../actions/cart'

import style from './cart.scss'

class Cart extends Component {

  constructor (props) {
    super(props)
  }

  goToCheckout = () => this.props.history.push('/checkout')

  chooseCart = (event, obj) => store.dispatch(cartActions.chooseCart(obj))
  chooseCartAll = (event, obj) => store.dispatch(cartActions.chooseCartAll(obj))
  deleteALl = () => store.dispatch(cartActions.deleteCartAll())

  render () {

    const {carts = [],changeCount, chooseCart,chooseCartAll,deleteCart} = this.props

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
                  <span className={style.cartTableDiscount}>折扣</span>
                </div>
                <div className={style.cartTable}>
                  {
                    carts.map((cart, index) =>
                      <div key={cart.id} className={style.cartItems}>
                        <div className={style.itemCheck}>
                          <Checkbox label="选择"
                                    value={index}
                                    name={cart.id}
                                    checked={cart.chosen}
                                    onChange={this.chooseCart}/>
                        </div>
                        <div className={style.itemThumb}>
                          <img alt={cart.itemName} className={style.itemThumbImg}
                               src={cart.image}/>
                        </div>
                        <div className={style.itemName}>
                          <div className={style.itemNameTable}>
                            {/*<a href="#/item/100022302"
                             title={cart.itemName}
                             target="_blank">{cart.itemName}
                             </a>*/}
                            <Link to={`/item/${cart.itemId}`}>{cart.itemName}</Link>
                            <ul>
                              <li>红色</li>
                              <li>{cart.itemDescribe}</li>
                            </ul>

                          </div>
                        </div>
                        <div className={style.itemDiscount}>
                          {cart.discount * 100}%
                        </div>
                        <div className={style.itemPrice}>
                          ￥&nbsp;{cart.price}
                        </div>
                        <div className={style.itemNumber}>
                          <div className={style.itemNumberWrapper}>
                            <ItemCount count={cart.count}
                                       changeCount={changeCount}
                                       output={index}/>
                          </div>
                        </div>
                        <div className={style.itemSubtotal}>
                          ￥&nbsp;{(cart.price * cart.discount).toFixed(2)}
                        </div>
                        <div className={style.itemOperation}>
                          <span onClick={() => deleteCart(cart.id)}></span>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className={style.bottom}>
                <div className={style.cartOperation}>
                  <div className={style.checkAll}>
                    <Checkbox label="全选" onChange={this.chooseCartAll}/>
                  </div>
                  <div className={style.deleteAll} onClick={this.deleteALl}>
                    删除选中商品
                  </div>
                </div>
                <div className={style.checkoutOperationBlock}>
                  <div className={style.checkoutMessage}>
                    <div className={style.checkoutNumber}>
                      <h4>已选择<i>{carts.filter(cart => cart.chosen).length}</i>件商品</h4>
                      <h5>共计<i>{carts.filter(cart => cart.chosen).reduce((sum, cart) => sum + cart.count, 0)}</i>件商品</h5>
                    </div>
                    <div className={style.checkoutPrice}>
                      <h4>
                        应付总额：<span>￥</span><i>{Number(carts.filter(cart => cart.chosen).reduce((sum, cart) => sum + cart.count * cart.price * cart.discount, 0)).toFixed(2)}</i>
                      </h4>
                      <h5>
                        总额节省：<span>￥</span><i>{Number(carts.filter(cart => cart.chosen).reduce((sum, cart) => sum + cart.count * cart.price * (1 - cart.discount), 0)).toFixed(2)}</i>
                      </h5>
                    </div>
                  </div>
                  <div className={style.checkoutOperation}>
                    <BlueBtn text="现在结算" callback={this.goToCheckout}/>
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