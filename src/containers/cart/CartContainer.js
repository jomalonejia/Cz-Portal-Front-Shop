import React,{Component} from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Cart from '../../components/cart'

@connect(
  null,
  null
)
class CartContainer extends Component{
  render(){
    return (
      <h1>
        hehe
      </h1>
    )
  }
}

export default CartContainer