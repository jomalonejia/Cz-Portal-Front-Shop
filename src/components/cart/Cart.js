import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Checkbox} from 'semantic-ui-react';
import BlueBtn from '../components/blueBtn';

import style from './cart.scss';

class Cart extends Component {
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
              {/*<div className={style.bottom}>

                <div className={style.operation}>
                  <div className={style.checkAll}>
                    <Checkbox label='全选'/>
                  </div>
                  <div className={style.deleteAll}>
                    删除选中商品
                  </div>

                </div>

              </div>*/}
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