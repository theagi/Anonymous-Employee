import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));


