/*
  Home
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

const Home = () => {

  return {

    renderPost (key) {
      // console.log('events', this.props.events);
      const event = this.props.events[key].fields;
      return <li key={key}><Link to={`/event/${event.slug}`}>{event.title}</Link></li>
    },

    render () {
      return (
        <div className="">
          <h1>WebApp</h1>

          <h2>Coming events...</h2>

          <ol>
          {Object.keys(this.props.events).map(this.renderPost.bind(this))}
          </ol>
        </div>
      )
    }

  }
}

export default Home;
