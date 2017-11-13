import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import Register from '../../components/register'
import * as userActions from '../../actions/user'

@connect(
  null,
  dispatch => bindActionCreators({...userActions}, dispatch))
class RegisterContainer extends Component {

  constructor (props){
    super(props)
  }

  render () {

    return (
      <Register {...this.props}/>
    )
  }
}

export default RegisterContainer

