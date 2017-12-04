import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RegisterComponent from './components'
import * as userActions from 'src/actions/user'

@connect(
  null,
  dispatch => bindActionCreators({...userActions}, dispatch))
class Register extends Component {

  constructor (props){
    super(props)
  }

  render () {

    return (
      <RegisterComponent {...this.props}/>
    )
  }
}

export default Register

