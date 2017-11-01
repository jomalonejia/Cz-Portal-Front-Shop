import React,{Component} from 'react';
import { connect } from 'react-redux';

import Checkout from '../../components/checkout';

@connect(
  null,
  null)
class CartContainer extends Component{
  render(){
    return (
      <Checkout/>
    )
  }
}

export default CartContainer;