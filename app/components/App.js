/*
  App
*/
import React from 'react'
import contentful from 'contentful'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar'

// require.ensure([], () => {
    
//     const getMuiTheme = require('material-ui/styles/getMuiTheme');
//     const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
//     const Navbar = require('./Navbar');

// }, 'navbar');

const contentfulClient = contentful.createClient({
  accessToken: '3504f58d8ba65f1ad9bd4650b5c0ee09ca499f4e65ddd2125446aab5432e0842',
  space: 'vox3jqb8t3cq'
});

// const PRODUCT_CONTENT_TYPE_ID = 'event';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      events: [],
      users: [],
      open: false
    }
  }

  componentDidMount() {
    // console.log("Mounted");
    // contentfulClient.getEntries({ skip: 5, limit: 5, order: '-sys.createdAt' })
    // contentfulClient.getContentType('user')
      contentfulClient.getEntries({
        'content_type': 'event'
      })
      .then((entries) => {
        this.setState({
          events: entries.items
        });
        // console.log('this.state', this.state);
      })
      
      contentfulClient.getEntries({
        'content_type': 'user',
        'order': 'fields.name,fields.firstName'
      })
      .then((entries) => {
        this.setState({
          users: entries.items
        });
        // console.log('this.state', this.state);
      })
      
    
    // fetch('http://www.the-aim.be/aimpress/rss', {
    // fetch('http://jsonplaceholder.typicode.com/posts', {
    //   method: 'get'
    // }).then((response) => {
    //   return response.json();
    // }).then((response) => {
    //   console.log(response);
    //   this.setState({
    //     posts: response
    //   });
    // }).catch((err) => {
    //   console.log('Error:', err);
    // })
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
        events: this.state.events,
        users: this.state.users
      })
    })

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="">
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default App;