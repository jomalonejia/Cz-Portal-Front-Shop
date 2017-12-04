import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'src/store'
import { bindActionCreators } from 'redux'
import InfoComponent from './components/info'


@connect(
 null,null)
export default class Info extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
     <InfoComponent {...this.props}/>
    )
  }
}