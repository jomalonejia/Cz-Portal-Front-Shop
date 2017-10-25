import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import axios from 'axios'

import HomePage from '../../components/homePage'

class HomePageContainer extends  Component{

  componentWillMount() {
    axios.get(
      '/api/item/listHotItems'
    )
      .then(res => {
        console.log(res);

      })
      .catch(err => {
        console.log(err);
    })
  }

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



