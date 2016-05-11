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
      return <li key={key}><Link to={`/post/${key}`}>{this.props.posts[key].title}</Link></li>
    },

    render() {
      return (
        <div className="">
          <h1>React start</h1>
          
          <Hello word={ word } mode={ mode } actions={ actions } />
          
          <ol>
          {Object.keys(this.props.posts).map(this.renderPost.bind(this))}
          </ol>
        </div>
      )
    }
    
  }
}

export default Home;