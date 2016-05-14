/*
  Home
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import helloFactory from './Hello'

const Hello = helloFactory({ React });
let word = "Thijs VdV";
let mode = "display";
let render;
const actions = {
  setWord (w) {
    word = w;
    Home.render();
  },

  setMode (m) {
    mode = m;
    Home.render();
  }
};

render = function () {
  ReactDOM.render(
    <Hello
      word={ word }
      mode={ mode }
      actions = { actions } />,

    document.getElementById('app')
  );
};

const Home = () => {
  
  return {

    renderPost(key) {
      console.log('events', this.props.events);
      const event = this.props.events[key].fields;
      return <li key={key}><Link to={`/event/${event.slug}`}>{event.title}</Link></li>
    },

    render() {
      return (
        <div className="">
          <h1>WebApp</h1>
          
          <Hello word={ word } mode={ mode } actions={ actions } />
          
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