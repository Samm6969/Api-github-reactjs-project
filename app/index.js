var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

//this renders to UI
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
