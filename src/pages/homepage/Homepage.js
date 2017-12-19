import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import axios from 'axios'
import {userSelector} from 'src/selectors/user'
import HomePageComponent from './components/homePage'
import {hotItems} from 'src/mockData/item'

class HomePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      hotItems: []
    }
  }

  componentWillMount () {
        this.setState({hotItems: hotItems})
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



