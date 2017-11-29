import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../components/pagination'
import { Icon, Item as SemanticItem, Rating, Form,Button} from 'semantic-ui-react'
import axios from 'axios'
import {changePage} from '../../services/pageService'
import ItemCount from '../components/itemCount'
import style from './item.scss'

class Item extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedImageIndex: 0,
      imageUrl: '',
      count: 1,
      params: [],
      comment:{}
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

  componentDidMount(){
      this.changePage(1)
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

  changePage = pageNum => {
    //axios.get(`/api/item/item/comment/${this.props.match.params.id}`,{params:{pageNum:pageNum,pageSize:5}})
    changePage(`/api/item/item/comment/${this.props.match.params.id}`,pageNum)
      .then(res => {
        this.setState({comment:res.data},()=>{
          console.log(this.state.comment)
        })
      })
      .catch(err => {})
  }

  render () {

    const {item = {}, addToCart, username} = this.props

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
                  <ItemCount count={this.state.count} changeCount={this.changeCount}/>
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
          {/*<div id="pm" className={style.pm}>
           <div className={style.pmTitle}>
           <h2>产品信息</h2>
           </div>
           <div className={style.allPic}>
           <h1>describe</h1>
           </div>
           </div>*/}
          <div id="graybox" className={`${style.grayBox} ${style.itemComment}`}>
            <div className={style.commentsArea}>
              <SemanticItem.Group className={style.commentsGroup}>
                <SemanticItem className={style.comments}>
                  <SemanticItem.Image size='tiny'
                                      src="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"/>
                  <SemanticItem.Content>
                    <SemanticItem.Header>
                      <Rating disabled icon='star' defaultRating={3} maxRating={5}/>
                    </SemanticItem.Header>
                    <SemanticItem.Header>
                      &nbsp;user
                    </SemanticItem.Header>
                    <SemanticItem.Meta>
                      <span>by:&nbsp;user&nbsp;</span>
                      <span className='stay'>2017-11-22 13:21:50</span>
                    </SemanticItem.Meta>
                    <SemanticItem.Description>it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!it's very nice!it's very nice!it's very nice!it's very nice!it's very
                      nice!</SemanticItem.Description>
                  </SemanticItem.Content>
                </SemanticItem>
                <SemanticItem className={style.comments}>
                  <SemanticItem.Image size='tiny'
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO"/>
                  <SemanticItem.Content>
                    <SemanticItem.Header>
                      <Rating disabled icon='star' defaultRating={3} maxRating={5}/>
                    </SemanticItem.Header>
                    <SemanticItem.Meta>
                      <span>by:&nbsp;user&nbsp;</span>
                      <span className='stay'>2017-11-22 13:21:50</span>
                    </SemanticItem.Meta>
                    <SemanticItem.Description>it's very nice!</SemanticItem.Description>
                  </SemanticItem.Content>
                </SemanticItem>
                <SemanticItem className={style.comments}>
                  <SemanticItem.Image size='tiny'
                                      src="data:image/jpeg;base64,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"/>
                  <SemanticItem.Content>
                    <SemanticItem.Header>
                      <Rating disabled icon='star' defaultRating={3} maxRating={5}/>
                    </SemanticItem.Header>
                    <SemanticItem.Meta>
                      <span>by:&nbsp;user&nbsp;</span>
                      <span className='stay'>2017-11-22 13:21:50</span>
                    </SemanticItem.Meta>
                    <SemanticItem.Description>it's very nice!</SemanticItem.Description>
                  </SemanticItem.Content>
                </SemanticItem>
                <SemanticItem className={style.comments}>
                  <SemanticItem.Image size='tiny'
                                      src="data:image/jpeg;base64,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"/>
                  <SemanticItem.Content>
                    <SemanticItem.Header>
                      <Rating disabled icon='star' defaultRating={3} maxRating={5}/>
                    </SemanticItem.Header>
                    <SemanticItem.Meta>
                      <span>by:&nbsp;user&nbsp;</span>
                      <span className='stay'>2017-11-22 13:21:50</span>
                    </SemanticItem.Meta>
                    <SemanticItem.Description>it's very nice!</SemanticItem.Description>
                  </SemanticItem.Content>
                </SemanticItem>
              </SemanticItem.Group>
              <div className={style.paginationArea}>
                <Pagination data={this.state.comment} handlerChange={this.changePage}/>
              </div>
              <div className={style.commentTextArea}>
                <Form>
                  <Form.Field>
                    <textarea rows={5} placeholder="Write your custom review" />
                  </Form.Field>
                  <Button fluid>Comment</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item

Item.propTypes = {
  item: PropTypes.object.isRequired,
}
