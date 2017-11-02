import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollToTop from './middleware/scrollToTop';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

import HomePageContainer from './containers/homepage';
import ItemContainer from './containers/item';
import AccountContainer from './containers/account';
import CartContainer from './containers/cart';
import CheckoutContainer from './containers/checkout';
import TestContainer from './containers/test';

@connect(
  state => state,
  null
)
class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <Header/>
          <Nav/>
          <ScrollToTop>
            <Route render={({location}) => (
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={location.pathname} className="body">
                  <Route location={location} exact path="/" component={HomePageContainer}/>
                  <Route location={location} path="/item/:id" component={ItemContainer}/>
                  <Route location={location} path="/account" component={AccountContainer}/>
                  <Route location={location} path="/cart" component={CartContainer}/>
                  <Route location={location} path="/checkout" component={CheckoutContainer}/>
                  <Route location={location} path="/test" component={TestContainer}/>
                </div>
              </ReactCSSTransitionGroup>)}/>
          </ScrollToTop>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
