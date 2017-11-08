import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../components/login'

@connect(null, null)
class LoginContainer extends Component {

  render () {

    return (
      <Login/>
    )
  }
}

export default LoginContainer

