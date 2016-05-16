/*
  App
*/
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed

import { install } from 'offline-plugin/runtime';
install();
