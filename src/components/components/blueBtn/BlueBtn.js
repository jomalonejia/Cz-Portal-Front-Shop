import React from 'react'
import style from './blueBtn.scss'

const BlueBtn = ({text,func}) => (
  <div className={style.blueBtn} onClick={func}>
    <span>{text}</span>
  </div>
)

export default BlueBtn




