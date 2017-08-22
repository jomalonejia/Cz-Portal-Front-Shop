import React, { Component } from 'react'
import panelStyle from '../../styles/panel.css'

class Panel extends Component {
  render () {
    return (
      <div className={panelStyle.panel}>
        <ul >
          <li>
            <img src="src/images/panelad01.jpg"/>
              <a href=""></a>
          </li>
          <li>
            <img src="src/images/panelad02.jpg"/>
              <a href=""></a>
          </li>
          <li>
            <img src="src/images/panelad03.jpg"/>
              <a href=""></a>
          </li>
          <li>
            <img src="src/images/panelad04.jpg"/>
              <a href=""></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Panel;