import React, { Component } from 'react'
import {Form,Rating,TextArea,Button} from 'semantic-ui-react'
import './rating.css'
import style from './comment.scss'

class CommentComponent extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {
      itemOrderInfo,
      comment,
      rating,
      changeComment,
      changeRating,
      addComment
    } = this.props

    return (
      <div className={style.main}>
        <div className={style.whiteWrapper}>
          <div className={style.commentArea}>
            <div className={style.commentInfo}>
              <div className={style.imageArea}>
                <img className={style.infoImage} src={itemOrderInfo.image}/>
              </div>
              <div className={style.infoArea}>
                <div className={style.infoLine}>
                  <h3>Order No.&nbsp;&nbsp;&nbsp;</h3>
                  <span>{itemOrderInfo.orderNumber}</span>
                </div>
                <div className={style.infoLine}>
                  <h3>Order Name&nbsp;&nbsp;&nbsp;</h3>
                  <span>{itemOrderInfo.itemName}</span>
                </div>
                <div className={style.infoLine}>
                  <h3>Rating&nbsp;&nbsp;&nbsp;</h3>
                  <Rating icon="star"
                          rating={rating}
                          maxRating={5}
                          onRate={changeRating}/>
                </div>
              </div>
            </div>
            <div className={style.commentForm}>
              <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                  <TextArea placeholder="Write your review"
                            value={comment}
                            onChange={changeComment}/>
                </Form.Field>
                <Button fluid type="button" onClick={() =>
                  addComment({
                    itemId:itemOrderInfo.itemId,
                    username:itemOrderInfo.username
                  })
                }>Add review</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentComponent