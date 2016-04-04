import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}>
      <Route path="/about/team" component={Team} />
    </Route>
  </Route>
)

export default routes;
