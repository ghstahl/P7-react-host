import './css/index.css';
import React from 'react';
import { render } from 'react-dom';
import  'react-router';
import  'react-router-redux';
import  'redux';
import  'redux-batched-actions';
import  'redux-persist';
import  'redux-logger';
import  'redux-thunk';
import  'react-tap-event-plugin';

render(
		<h1>Hello, World!</h1>,
        document.getElementById('app')
)
