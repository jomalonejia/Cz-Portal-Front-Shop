import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import style from './info.scss'

const InfoComponent = () =>
  <div className={style.main}>
    <div className={style.wrapper}>
      <div className={style.title}>
        <h2>info</h2>
      </div>
      <div className={style.inner}>
        <div className={style.orderEmpty}>
          <h2>You do not have any orders</h2>
          <div className={style.emptyBtn}>
            <Link  to="/" >
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

export default InfoComponent