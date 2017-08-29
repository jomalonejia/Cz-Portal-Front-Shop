import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import {accountActions} from '../../actions/account'

import style from './account.scss'

class Account extends Component{

  constructor (props){
    super(props);
  }

  componentWillMount() {
    this.props.testSaga('aluba');
  }


  render(){

    const menus = [
      {name:'order',describe:'我的订单',url:'/'},
      {name:'support',describe:'售后服务',url:'/'},
      {name:'info',describe:'账户资料',url:'/'},
      {name:'address',describe:'收货地址',url:'/'},
    ]

    return(
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.sidebar}>
            <div className={style.avatar}>
              <div className={style.profile}>
                <img src='/src/images/profile.jpg'/>
              </div>
              <div className={style.inner}>
                <ul>
                  {
                    menus.map((menu,index) => (
                    <li key={index}>
                     {/* <NavLink to={menu.url}>*/}
                        {menu.name}
                      {/*</NavLink>*/}
                    </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className={style.content}>

          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeMenu: accountActions.changeAccountMenu,
  testSaga:accountActions.testSaga
};

export default connect(
  null,
  mapDispatchToProps
)(Account);
