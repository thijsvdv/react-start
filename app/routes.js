import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Post from './components/Post'
import Events from './components/Events'
import Event from './components/Event'
import Users from './components/Users'
import User from './components/User'
import About from './components/About'
import Team from './components/Team'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}>
      <Route path="/about/team" component={Team} />
    </Route>
    <Route path="/post" component={Post} name="post" />
    <Route path="/events" component={Events} name="events" />
    <Route path="/event/:eventid" component={Event} name="event" />
    <Route path="/users" component={Users} name="users" />
    <Route path="/user/:userid" component={User} name="user" />
    <Route path="/post/:postid" component={Post} name="post" />
  </Route>
)

export default routes;
