import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import Order from '../../../components/account/order'

class OrderContainer extends React.Component{
  constructor (props) {
    super(props);
  }

  render(){

    const orders = [
      {
        orderNumber:'1704127569257178',
        date:'2017-04-12',
        detail:[
          {
            name: '充电器',
            price: 29,
            account:1,
            imgUrl:'/src/images/gerenzhongxin1.png'
          },
          {
            name: 'USB',
            price: 30,
            account:2,
            imgUrl:'/src/images/gerenzhongxin2.png'
          }
        ]
      },
      {
        orderNumber:'1704127569257179',
        date:'2017-04-13',
        detail:[
          {
            name: '手机',
            price: 2499,
            account:1,
            imgUrl:'/src/images/gerenzhongxin3.png'
          }
        ]
      }
    ]

    return (
      <Order orders={orders}/>
    )
  }
}

const mapStateToProps = createSelector(

);

const mapDispatchToProps = {

};

export default connect(
  null,
  null
)(OrderContainer);