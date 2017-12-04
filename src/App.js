import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ScrollToTop from './middleware/scrollToTop'

import history from './history'

import HomePage from './pages/homepage'
import Item from './pages/item'
import Account from './pages/account'
import Cart from './pages/cart'
import Comment from './pages/comment'
import Checkout from './pages/checkout'
import Login from './pages/login'
import Register from './pages/register'
import Payment from './pages/payment'

import Layout from './components/layout'


@connect(
  state => state,
  null
)
class App extends Component {

  render () {
    return (
      <ConnectedRouter history={history}>
        <div>
          <ScrollToTop>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
              <Layout exact path="/" component={HomePage}/>
              <Layout path="/item/:id" component={Item}/>
              <Layout path="/account/:menu" component={Account}/>
              <Layout path="/cart" component={Cart}/>
              <Layout path="/comment/:orderId" component={Comment}/>
              <Layout path="/checkout" component={Checkout}/>
              <Layout path="/payment" component={Payment}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </ReactCSSTransitionGroup>
          </ScrollToTop>
        </div>
      </ConnectedRouter>
    )
  }
}

export default App

