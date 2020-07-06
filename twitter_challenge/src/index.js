import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from "./registerServiceWorker";
import App from './App';
import tweetsReducer from './store/reducers/tweetsReducer';
import { watcherSaga } from './store/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  tweetsReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
