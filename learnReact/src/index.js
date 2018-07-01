import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router.js';
import './css/style.css';



// second argument is the id where app is 'mounted'
render (<Router />, document.querySelector('#mount'));
