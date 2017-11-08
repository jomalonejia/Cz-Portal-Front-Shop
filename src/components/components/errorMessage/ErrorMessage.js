import React from 'react'
import style from './errorMessage.scss'

const ErrorMessage = ({isError = false, message = ''}) => (
  <div className={`${style.errorMessage} ${isError ? style.isShown : null}`}>
    <p>{message}</p>
  </div>
)

export default ErrorMessage




