import React, { Component } from 'react'
import style from './comment.scss'
import { Image } from 'semantic-ui-react'

class CommentComponent extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className={style.main}>
        <div className={style.whiteWrapper}>
          commnet
        </div>
      </div>
    )
  }
}

export default CommentComponent