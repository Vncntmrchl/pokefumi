import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import PlayersView from './views/PlayersView';
import Matches from './views/Matches';
import Scoreboard from './views/Scoreboard';
import Navigation from './views/Navigation';

const routs = (
  < Router >
     <div>
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={App} />
        <Route path="/players" component={ PlayersView } />
        <Route path="/matches" component={ Matches } />
        <Route path="/scores" component={ Scoreboard } />
     </div>
  </ Router >
);
ReactDOM.render(routs, document.getElementById('root'))

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
