import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import HomePage from './components/homePage'
import Item from './components/Item'

import createBrowserHistory from 'history/createBrowserHistory'

class App extends Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render () {
    return (
      <div>
        <Header/>
        <Nav/>
        <Router history={createBrowserHistory()}>
          <Route render={({ location }) => {
            return(
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <div key={location.pathname}>
                  <Route location={location} exact path="/" component={HomePage} />
                  <Route location={location} path="/item/:id" component={Item} />
                </div>
              </ReactCSSTransitionGroup>
            )
          }}/>
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default App
