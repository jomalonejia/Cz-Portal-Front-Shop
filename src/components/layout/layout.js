import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../header'
import Nav from '../nav'
import Footer from '../footer'

const Layout = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    <div>
      <Header/>
      <Nav/>
      <Component {...props}/>
      <Footer/>
    </div>
  )}/>
)

export default Layout