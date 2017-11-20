import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './order.scss'

class Order extends Component {

  constructor (props) {
    super(props)
  }

  render () {

     const {orders} = this.props

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>我的订单</h2>
          </div>
          {
            orders.length > 0
              ? <div className={style.innerOrder}>
              <ul>
                {
                  orders.map((order, index) => (
                    <li key={index}>
                      <div className={style.order}>
                        <div className={style.orderTitle}>
                          <table className={style.orderTitleTable}>
                            <tbody>
                              <tr>
                                <td className={style.orderTd1}>{order.date}</td>
                                <td className={style.orderTd2}>订单号:{order.orderNumber}</td>
                                <td className={style.orderTd3}>单价</td>
                                <td className={style.orderTd4}>数量</td>
                                <td className={style.orderTd5}>应付总额</td>
                                <td className={style.orderTd6}>商品操作</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={style.orderDetail}>
                          <table className={style.orderDetailTable}>
                            <tbody>
                            {
                              order.detail.map((detail,detailIndex)=> (
                                <tr key={detailIndex}>
                                  <td className={style.orderTd1}>
                                    <img src={detail.imgUrl}/>
                                  </td>
                                  <td className={style.orderTd2}>{detail.name}</td>
                                  <td className={style.orderTd3}>￥{detail.price}</td>
                                  <td className={style.orderTd4}>1</td>
                                  <td className={style.orderTd5}>￥{detail.price * detail.account}</td>
                                  <td className={style.orderTd6}>删除</td>
                                </tr>
                              ))
                            }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
              : <div className={style.innerEmpty}>
              <div className={style.orderEmpty}>
                <h2>You do not have any order</h2>
                <div className={style.emptyBtn}>
                  <Link to="/">
                    Homepage
                  </Link>
                </div>
              </div>
            </div>
          }


        </div>
      </div>
    )
  }
}

export default Order