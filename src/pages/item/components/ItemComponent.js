import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Pagination from 'src/components/components/pagination'
import { Icon, Item as SemanticItem, Rating, Form, Button } from 'semantic-ui-react'
import {changePage} from 'src/services/pageService'
import Count from 'src/components/components/count'
import style from './item.scss'
import {itemComments} from 'src/mockData/item'

class ItemComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedImageIndex: 0,
      imageUrl: '',
      count: 1,
      params: [],
      commentsInfo: {},

    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.params.length <= 0) {
      if (nextProps.item.params) {
        const params = []
        nextProps.item.params.map(param => {
          params.push({paramId: param.id, paramValue: param.paramDetails[0].paramValue})
        })
        this.setState({params: [...params]})
      }
    }
  }

  componentDidMount () {
    this.onChangePage(1)
  }

  changeParam (paramId, paramValue) {
    const params = [...this.state.params]
    const findParam = params.find(param => param.paramId == paramId)
    if (findParam) {
      const findParamIndex = params.findIndex(param => param.paramId == paramId)
      findParam.paramValue = paramValue
      params[findParamIndex] = findParam
    } else {
      params.push({paramId: paramId, paramValue: paramValue})
    }
    this.setState({params: [...params]})

  }

  changeCount = (i) => {
    let newCount = this.state.count + i
    this.setState({count: newCount})
  }

  changeImage (index, imageUrl) {
    this.setState({selectedImageIndex: index, imageUrl: imageUrl})
  }

  checkout () {
    this.props.history.push('/checkout')
  }

  onChangePage = pageNum => {
    const comment = itemComments.find(comment => comment.pageNum == pageNum)
    this.setState({commentsInfo: comment})
  }

  render () {

    const {item = {}, addToCart,addComment,username} = this.props

    return (
      <div>
        <div className={style.main}>
          <div id="graybox" className={`${style.grayBox} ${style.itemInfo}`}>
            <div className={style.wrapper}>
              <div className={style.gallery}>
                <div className={style.thumbNail}>

                  <ul>
                    {
                      item.shownImages
                        ? item.shownImages.map((imageUrl, index) =>
                        <li onClick={this.changeImage.bind(this, index, imageUrl)} key={index}>
                          {
                            imageUrl != null && imageUrl != ''
                              ? <img src={imageUrl}
                                     className={index === this.state.selectedImageIndex ? style.imageShow : null}/>
                              : null
                          }
                        </li>
                      )
                        : null
                    }
                  </ul>
                </div>
                <div className={style.thumb}>
                  <img src={this.state.imageUrl != '' ? this.state.imageUrl : item.image}/>
                </div>
              </div>
            </div>

            <div className={style.banner}>
              <div className={style.titleText}>
                <div className={style.price}>
                 <span className={style.priceSpan}>
                 <em><Icon name="dollar"/></em>&nbsp;{item.price}
                 </span>
                </div>
                <div className={style.itemsInfo}>
                  <div className={style.textName}>
                    <h4>{item.name}</h4>
                    <h5>{item.describe}</h5>
                  </div>
                </div>
              </div>

              <div className={style.param}>
                {
                  item.params && item.params.map((param, index) =>
                    <div className={style.paramArea} key={param.id}>
                      <span className={style.paramName}>{param.paramDescribe}</span>
                      <ul className={style.paramValues}>
                        {
                          param.paramDetails.map((detail, detail_index) =>
                            param.paramName == 'color'
                              ? <li key={detail.paramValue}
                                    className={`${style.paramColor}
                                  ${(this.state.params[index] && this.state.params[index].paramValue) == detail.paramValue ? style.paramColorActivate : null}
                                  `}
                                    onClick={this.changeParam.bind(this, param.id, detail.paramValue, index)}>
                              <span style={{backgroundColor: detail.paramValue}}></span>
                            </li>
                              : <li key={detail.paramValue}
                                    className={`${style.paramValue}
                                ${(this.state.params[index] && this.state.params[index].paramValue) == detail.paramValue ? style.paramActivate : null}
                                `}
                                    onClick={this.changeParam.bind(this, param.id, detail.paramValue, index)}>
                              {detail.paramValue}
                            </li>
                          )
                        }
                      </ul>
                    </div>
                  )
                }
                <div className={style.paramArea}>
                  <span className={style.paramName}>Count</span>
                  <Count count={this.state.count} changeCount={this.changeCount}/>
                </div>
              </div>
              <div className={style.buyNow}>
                <div className={style.buttonText}>
                  <div className={style.buttonBar}>
                    <span className={style.blueBtn}
                          disabled={this.state.params.length <= 0}
                          onClick={() => addToCart(Object.assign({}, {
                            params: this.state.params,
                            count: this.state.count,
                            itemId: item.id,
                            username: username,
                            postFee: item.postFee
                          }))}>
                      加入购物车
                    </span>
                    <span className={style.grayBtn}
                          onClick={this.checkout.bind(this, item)}>
                      现在购买
                    </span>
                    <div className={style.warning}>
                      <p>* 非质量问题退货，需保证塑封且完好，不影响二次销售。已经拆封或有人为损坏影响二次销售的图书不支持 7 天无理由退货。</p>

                      <p>* 7 天无理由退货，15 天免费换货，满 150 元免运费。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pm" className={style.pm}>
            <div className={style.pmTitle}>
              <h2>产品信息</h2>
            </div>
            <div className={style.allPic}>
              <div id="itemContentContainer" dangerouslySetInnerHTML={{__html: item.content}}>

              </div>
            </div>
          </div>
          <div className={`${style.grayBox} ${style.itemComment}`}>
            <div className={style.commentsArea}>
              <SemanticItem.Group className={style.commentsGroup}>
                {
                  (this.state.commentsInfo
                    && this.state.commentsInfo.list
                    && this.state.commentsInfo.list.length > 0
                )
                  ?
                  this.state.commentsInfo.list.map((comment, index) => (
                    <SemanticItem key={comment.id} className={style.comments}>
                      <SemanticItem.Image size="tiny" src={comment.profile}/>
                      <SemanticItem.Content>
                        <SemanticItem.Header>
                          <Rating disabled icon="star" defaultRating={comment.rating} maxRating={5}/>
                        </SemanticItem.Header>
                        <SemanticItem.Meta>
                          <span className={style.commentUsername}>by:&nbsp;{comment.username}&nbsp;</span>
                          <span
                            className={style.commentDate}>{new Date(comment.commentDate).toISOString().replace(/T/, ' ').substring(0, 16)}</span>
                        </SemanticItem.Meta>
                        <SemanticItem.Description>
                          {comment.comment}
                        </SemanticItem.Description>
                      </SemanticItem.Content>
                    </SemanticItem>
                  ))
                    : <div className={style.noComment}>No comments ...</div>
                }
              </SemanticItem.Group>
              <div className={style.paginationArea}>
                <Pagination data={this.state.commentsInfo} handlerChange={this.onChangePage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemComponent

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
}
