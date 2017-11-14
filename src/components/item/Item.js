import React, { Component } from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import ItemCount from '../components/itemCount'
import style from './item.scss'

class Item extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedImageIndex: 0,
      imageUrl: '',
      count: 1,
      params: []
    }
  }

  componentDidMount () {

  }

  changeParam (paramId, paramValue) {
    /* const newParams = update(this.state.cart, {
     params:{
     [index]:{
     paramId:{$set:paramIdd},
     paramValue:{$set:paramValue}
     }
     }
     })*/
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

  /*changeCount (i) {
   let newCount = this.state.count + i;
   this.setState({count:newCount});
   }*/

  changeCount = (i) => {
    let newCount = this.state.count + i
    this.setState({count: newCount})
  }

  changeImage (index, imageUrl) {
    this.setState({selectedImageIndex: index, imageUrl: imageUrl})
  }

  checkout () {
    console.log(this.props.match.params)
  }

  render () {

    const {item = {}, addToCart, username} = this.props
    console.log(item)
    console.log(username)
    return (
      <div>
        {/*<div className={style.main}>
          <div id="graybox" className={style.grayBox}>
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
                 <em>￥</em>&nbsp;{item.price}
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
                  <span className={style.paramName}>数量</span>
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
                            username: username
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
        </div>*/}


        {/* <div id="pm" className={style.pm}>
         <div className={style.pmTitle}>
         <h2>产品信息</h2>
         </div>
         <div className={style.allPic}>
         {
         item.detailImages.map((imageUrl, index) => (
         <img key={index} src={imageUrl}/>
         ))
         }
         </div>
         </div>*/}
      </div>
    )
  }
}

export default Item

/*Item.propTypes = {
  item: PropTypes.object.isRequired,
}*/
