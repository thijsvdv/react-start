/*
  App
*/
import React from 'react'
import contentful from 'contentful'
import Navbar from './Navbar'

const contentfulClient = contentful.createClient({
  accessToken: '3504f58d8ba65f1ad9bd4650b5c0ee09ca499f4e65ddd2125446aab5432e0842',
  space: 'vox3jqb8t3cq'
});

// const PRODUCT_CONTENT_TYPE_ID = 'event';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      users: []
    }
  }

  componentDidMount() {
    // console.log("Mounted");
      // contentfulClient.getEntries({ skip: 5, limit: 5, order: '-sys.createdAt' })
      // .then((entries) => {
      //   console.log('entries', entries);
      // });
      // contentfulClient.getContentType('user')
      // .then((contentType) => {
      //   console.log('contentType', contentType);
      // });
      contentfulClient.getEntries({
        'content_type': 'event'
      })
      .then((entries) => {
        this.setState({
          posts: entries.items
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
        posts: this.state.posts,
        users: this.state.users
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