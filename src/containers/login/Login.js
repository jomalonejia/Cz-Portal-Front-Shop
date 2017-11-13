import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../../components/login'

import * as userActions from '../../actions/user'
import {userLoginErrorSelector} from '../../selectors/user'

@connect(
  state => userLoginErrorSelector,
  dispatch => bindActionCreators({...userActions}, dispatch)
)
class LoginContainer extends Component {

  constructor (props){
    super(props)
  }

  render () {

    return (
      <Login {...this.props}/>
    )
  }
}

export default LoginContainer

