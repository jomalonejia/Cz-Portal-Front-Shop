import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import axios from 'axios'
import {userSelector} from 'src/selectors/user'
import HomePageComponent from './components/homePage'

class HomePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      hotItems: []
    }
  }

  componentWillMount () {
    axios.get(
      '/api/item/item/listHotItems'
    )
      .then(res => {
        this.setState({hotItems: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {

    return (
      <HomePageComponent hotItems={this.state.hotItems}/>
    )
  }
}

export default connect(
  null,
  null
)(HomePage)



