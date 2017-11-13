import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

/*
 ReactDOM.render(
 <App />,
 document.getElementById('root'));
 */

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
    ,
    document.getElementById('root')
  )

render(App)
if (module.hot) {
  module.hot.accept('./App', () => render(App))
}

registerServiceWorker()
