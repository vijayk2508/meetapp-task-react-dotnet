import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './route';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";

import 'bootstrap/dist/css/bootstrap.css';
import store, { history } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <AppRoute />
      </Router>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
