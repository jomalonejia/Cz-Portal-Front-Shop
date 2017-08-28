import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ScrollToTop from './middleware/scrollToTop'
import HomePage from './components/homePage'
import Item from './components/item'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import Account from './components/account'
import Login from './components/login'

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <ScrollToTop>
            <Route render={({location}) => {
              return (
                <ReactCSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  <div key={location.pathname}>
                    <Header/>
                    <Nav/>
                    <Route location={location} exact path="/" component={HomePage}/>
                    <Route location={location} path="/item/:id" component={Item}/>
                    <Route location={location} path="/account" component={Account}>

                    </Route>
                    <Footer/>
                  </div>
                </ReactCSSTransitionGroup>
              )
            }}/>
          </ScrollToTop>
        </div>
      </Router>
    )
  }
}

export default App
