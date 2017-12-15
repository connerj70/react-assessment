import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reducer from './ducks/reducer';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

let store = createStore(reducer, applyMiddleware(promiseMiddleware(), logger));

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
registerServiceWorker();
