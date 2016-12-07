//var component = require('./app.jsx'); 
//import React from 'react';
//import component from "./components/component.js"
//import ReactDom from 'react-dom';
//import App from './app.jsx';

require("./sass/index")
var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/component');

require("./components/module3");

ReactDom.render(<App />, document.getElementById('app'))
 