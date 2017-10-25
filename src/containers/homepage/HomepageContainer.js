import React,{Component} from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import axios from 'axios';

import HomePage from '../../components/homePage';

class HomePageContainer extends  Component{

  constructor (props){
    super(props);
    this.state = {
      hotItems:[]
    };
  }

  componentWillMount() {
    axios.get(
      '/api/item/listHotItems'
    )
      .then(res => {
        this.setState({hotItems:res.data});
      })
      .catch(err => {
        console.log(err);
    });
  }


  render(){


    return (
      <HomePage hotItems={this.state.hotItems}/>
    )
  }
}

export default connect(
  null,
  null
)(HomePageContainer);



