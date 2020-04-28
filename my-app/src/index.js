import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {Assignment_1, Assignment_2} from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App title="This is my react app"/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Assignment_1 />,
  document.getElementById('assignment1')
)

ReactDOM.render(
  <Assignment_2 />,
  document.getElementById('assignment2')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
