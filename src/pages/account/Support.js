import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'src/store'
import { bindActionCreators } from 'redux'
import SupportComponent from './components/support'


@connect(null,null)
export default class Support extends Component {
  constructor (props) {
    super(props)
  }


  render () {
    return (
     <SupportComponent {...this.props}/>
    )
  }
}