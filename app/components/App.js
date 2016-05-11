/*
  App
*/
import React from 'react'
import Navbar from './Navbar'

class App extends React.Component {

  constructor() {
    super();

    console.log("Constructed");
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    console.log("Mounted");
    // fetch('http://www.the-aim.be/aimpress/rss', {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'get'
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      this.setState({
        posts: response
      });
    }).catch((err) => {
      console.log('Error:', err);
    })
    // this.serverRequest = $.get('http://jsonplaceholder.typicode.com/posts', (result) => {
    //   // console.log(result);
    //   this.setState({
    //     posts: result
    //   });
    // });
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        posts: this.state.posts
      })
    })

    return (
      <div className="">
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    )
  }

}

export default App;