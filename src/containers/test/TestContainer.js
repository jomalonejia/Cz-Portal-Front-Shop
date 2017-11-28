import React, { Component } from 'react'
import Pagination from '../../components/components/pagination'

class TestContainer extends Component {

  handlerChange = (event) => console.log(event)

  render () {
    return (
      <div>
        <Pagination handlerChange={this.handlerChange}/>
      </div>
    )
  }
}

export default TestContainer

