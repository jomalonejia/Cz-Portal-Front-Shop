import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'src/store'
import CommentComponent from './components'
import * as commentActions from './actions'

@connect(
  null, null
)
class Comment extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const { match } = this.props
    store.dispatch(commentActions.getItemOrderInfo(match.params.orderId))
  }

  render () {
    return (
      <CommentComponent {...this.props}/>
    )
  }
}

export default Comment