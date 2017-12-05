import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from 'src/store'
import CommentComponent from './components'
import * as commentActions from './actions'
import { itemOrderInfoSelector } from './selectors'

@connect(
  state => itemOrderInfoSelector,
  null
)
class Comment extends Component {

  constructor (props) {
    super(props)
    this.state = {
      comment: '',
      rating:0,
    }
  }

  changeComment = event => {
    this.setState({comment:event.target.value})
  }

  changeRating = (event, data) => {
    this.setState({rating:data.rating})
  }

  addComment = comment => {
    Object.assign(comment,{...this.state,orderId:this.props.match.params.orderId})
    store.dispatch(new commentActions.addComment(comment))
  }

  componentWillMount () {
    const { match } = this.props
    store.dispatch(commentActions.getItemOrderInfo(match.params.orderId))
  }

  render () {
    return (
      <CommentComponent comment={this.state.comment}
                        rating={this.state.rating}
                        changeComment={this.changeComment}
                        changeRating={this.changeRating}
                        addComment = {this.addComment}
                        {...this.props}/>
    )
  }
}

export default Comment