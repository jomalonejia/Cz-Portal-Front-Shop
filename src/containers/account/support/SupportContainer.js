import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import Info from '../../../components/account/info'

class SupportContainer extends Component{
  render(){
    return (
      <Info/>
    )
  }
}

export default SupportContainer