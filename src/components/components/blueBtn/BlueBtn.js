import React from 'react'
import style from './blueBtn.scss'

const BlueBtn = ({text,callback}) => (
  <div className={style.blueBtn} onClick={callback}>
    <span>{text}</span>
  </div>
)

export default BlueBtn




