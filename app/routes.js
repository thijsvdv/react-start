import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Post from './components/Post'
import About from './components/About'
import Team from './components/Team'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}>
      <Route path="/about/team" component={Team} />
    </Route>
    <Route path="/post" component={Post} name="post" />
    <Route path="/post/:postid" component={Post} name="post" />
  </Route>
)

export default routes;
