import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import Reducers from './ducks';
import Sagas from './saga/Sagas';

export const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];
export const store = createStore(
    Reducers(history),
    reduxDevTools
        ? compose(applyMiddleware(...middleware), reduxDevTools)
        : compose(applyMiddleware(...middleware)),
);
sagaMiddleware.run(Sagas);
