import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect';

import HomePage from '../../components/homePage'

class HomePageContainer extends  Component{
  render(){
    return (

      <HomePage/>
    )
  }
}

export default connect(
  null,
  null
)(HomePageContainer);



