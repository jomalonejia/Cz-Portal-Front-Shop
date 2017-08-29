import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

/*
ReactDOM.render(
  <App />,
  document.getElementById('root'));
*/

const render = Component =>
  ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>
    ,
    document.getElementById('root')
  );

render(App)
registerServiceWorker();
