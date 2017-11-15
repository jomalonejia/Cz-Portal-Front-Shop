import React from 'react'
import style from './itemCount.scss'

const ItemCount = ({count = 1, changeCount, output = null}) => (
  <div className={style.paramNumberLine}>
                    <span onClick={count > 1 ? () => changeCount(-1, output) : null}
                          className={`${style.paramNumber} ${style.paramNumberMinus}
                          ${count == 1 ? style.paramNumberMinusDisabled : ''}`}>
                    </span>
    <span className={style.paramNumberCount}> {count}</span>
    <span onClick={() => changeCount(1, output)}
          className={`${style.paramNumber} ${style.paramNumberAdd}`}></span>
  </div>
)

export default ItemCount




