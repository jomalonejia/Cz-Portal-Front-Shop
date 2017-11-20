import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import style from './support.scss'

class Support extends Component {
  render () {
    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.title}>
            <h2>售后服务</h2>
          </div>
          <div className={style.inner}>
            <div className={style.orderEmpty}>
              <h2>Your not have any support</h2>
              <div className={style.emptyBtn}>
                <Link  to="/" >
                  Homepage
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Support
