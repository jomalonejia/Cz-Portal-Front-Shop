import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import Info from '../../../components/account/info'

class InfoContainer extends Component{
  render(){
    return (
      <Info/>
    )
  }
}

export default InfoContainer