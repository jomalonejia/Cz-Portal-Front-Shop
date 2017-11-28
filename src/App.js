import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ScrollToTop from './middleware/scrollToTop'

import history from './history'

import HomePageContainer from './containers/homepage'
import ItemContainer from './containers/item'
import AccountContainer from './containers/account'
import CartContainer from './containers/cart'
import CheckoutContainer from './containers/checkout'
import LoginContainer from './containers/login'
import RegisterContainer from './containers/register'
import PaymentContainer from './containers/payment'
import TestContainer from './containers/test'

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
              <Layout exact path="/" component={HomePageContainer}/>
              <Layout path="/item/:id" component={ItemContainer}/>
              <Layout path="/account/:menu" component={AccountContainer}/>
              <Layout path="/cart" component={CartContainer}/>
              <Layout path="/checkout" component={CheckoutContainer}/>
              <Layout path="/payment" component={PaymentContainer}/>
              <Layout path="/test" component={TestContainer}/>
              <Route path="/login" component={LoginContainer}/>
              <Route path="/register" component={RegisterContainer}/>
            </ReactCSSTransitionGroup>
          </ScrollToTop>
        </div>
      </ConnectedRouter>
    )
  }
}

export default App

