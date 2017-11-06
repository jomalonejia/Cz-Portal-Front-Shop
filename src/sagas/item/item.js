import { call, fork, select,put, take, takeLatest } from 'redux-saga/effects';
import {push} from 'react-router-redux';
import axios from 'axios';
import {ADD_TO_CART} from '../../actions/item';

import history from '../../history';




export function * addToCart(action){
  yield console.log(action.payload);
  axios.post(`/api/item/addToCart`,action)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  //yield history.push('/cart');
}

function * getAddToCart() {
  yield takeLatest(ADD_TO_CART,addToCart);
}

export const itemSagas = [
  fork(getAddToCart)
]