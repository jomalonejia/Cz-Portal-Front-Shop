import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './item.scss';

class Item extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count:1,
      item:{},
      selectedImageIndex: 0,
      imageUrl: '',
    };
  }

  componentWillMount () {

  }

  changeParam(paramId,paramValue){
    this.setState({[paramId]:paramValue});
  }

  changeCount (i) {
    let newCount = this.state.count + i;
    this.setState({count:newCount});
  }

  changeImage (index, imageUrl) {
    this.setState({selectedImageIndex: index, imageUrl: imageUrl});
  }

  addToCart(){
    console.log('add to cart')
  }

  checkout(){
    console.log('buy now')
  }

  render () {

    const {item = {}} = this.props;

    return (
      <div>
        <div className={style.main}>
          <div id="graybox" className={style.grayBox}>
            <div className={style.wrapper}>
              <div className={style.gallery}>
                <div className={style.thumbNail}>

                  <ul>
                    {
                      item.shownImages
                        ?
                        item.shownImages.map((imageUrl, index) =>
                          <li onClick={this.changeImage.bind(this, index, imageUrl)} key={index}>
                            {
                              imageUrl != null && imageUrl != ''
                                ?
                                <img src={imageUrl} className={index === this.state.selectedImageIndex ? style.imageShow : null}/>
                                :
                                null
                            }

                          </li>
                      )
                        :
                        null
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
                          param.paramDetails.map((detail, index) =>
                            param.paramName == 'color'
                              ?
                              <li key={detail.paramValue}
                                  className={`${style.paramColor} ${this.state[param.id] == detail.paramValue ? style.paramColorActivate : null}`}
                                  onClick={this.changeParam.bind(this,param.id,detail.paramValue)}>
                                <span style={{backgroundColor:detail.paramValue}}></span>
                              </li>
                              :
                            <li key={detail.paramValue}
                                className={`${style.paramValue} ${this.state[param.id] == detail.paramValue ? style.paramActivate : null}`}
                                onClick={this.changeParam.bind(this,param.id,detail.paramValue)}>
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
                  <div className={style.paramNumberLine}>
                    <span onClick={this.state.count > 1 ? this.changeCount.bind(this, -1) : null}
                          className={`${style.paramNumber} ${style.paramNumberMinus}
                          ${this.state.count == 1 ? style.paramNumberMinusDisabled : ''}`}>
                    </span>
                    <span className={style.paramNumberCount}> {this.state.count}</span>
                    <span onClick={this.changeCount.bind(this, 1)}
                          className={`${style.paramNumber} ${style.paramNumberAdd}`}></span>
                  </div>
                </div>
              </div>
              <div className={style.buyNow}>
                <div className={style.buttonText}>
                  <div className={style.buttonBar}>
                    <span className={style.blueBtn} onClick={this.addToCart.bind(this)}>加入购物车</span>
                    <span className={style.grayBtn} onClick={this.checkout.bind(this)}>现在购买</span>

                    <div className={style.warning}>
                      <p>* 非质量问题退货，需保证塑封且完好，不影响二次销售。已经拆封或有人为损坏影响二次销售的图书不支持 7 天无理由退货。</p>

                      <p>* 7 天无理由退货，15 天免费换货，满 150 元免运费。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


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
    );
  }
}

export default Item;

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
