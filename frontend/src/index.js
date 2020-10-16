import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './route';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import store, { history } from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <AppRoute />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
