import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'



ReactDOM.render(
  <React.StrictMode>
    <P5Wrapper sketch={sketch} />
    <P5Wrapper sketch={sketch} />
    <P5Wrapper sketch={sketch} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
