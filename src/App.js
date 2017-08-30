import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ScrollToTop from './middleware/scrollToTop'
import Item from './components/item'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import Account from './components/account'
import Login from './components/login'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import asyncComponent from './middleware/asyncComponent'

import HomePageContainer from './containers/homepage'
import AccountContainer from './containers/account'
import ItemContainer from './containers/item'

import Order from './components/account/order'



class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <ScrollToTop>
            <Route render={({location}) => (
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  <div key={location.pathname}>
                    <Header/>
                    <Nav/>
                    <Switch>
                      <Route location={location} exact path="/" component={HomePageContainer}/>
                      <Route location={location} path="/item/:id" component={ItemContainer}/>
                      {/* <AccountContainer>
                       <Route location={location} path="/account/order" component={Order}/>
                       </AccountContainer>*/}
                       <Redirect to="/"/>
                    </Switch>
                    <Footer/>
                  </div>
                </ReactCSSTransitionGroup>
              )
            }/>
          </ScrollToTop>
        </div>
      </Router>
    )
  }
}

export default App
