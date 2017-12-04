import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginComponent from './components'

import * as userActions from 'src/actions/user'
import {userLoginErrorSelector} from 'src/selectors/user'

@connect(
  state => userLoginErrorSelector,
  dispatch => bindActionCreators({...userActions}, dispatch)
)
class Login extends Component {

  constructor (props){
    super(props)
  }

  render () {

    return (
      <LoginComponent {...this.props}/>
    )
  }
}

export default Login

