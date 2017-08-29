import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter,  routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers'
import sagas from '../sagas'

const history = createHistory();
const historymiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();

const middlewares = [historymiddleware,sagaMiddleware]

export default function configureStore() {

  let middleware = applyMiddleware(...middlewares);

  const devToolsExtension = window.devToolsExtension;

  middleware = compose(middleware, devToolsExtension());

  const store = createStore(reducers, middleware);
  sagaMiddleware.run(sagas);

  /*if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }*/

  return store;
}