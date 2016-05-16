import React from 'react'
import contentful from 'contentful'

const contentfulClient = contentful.createClient({
  accessToken: '3504f58d8ba65f1ad9bd4650b5c0ee09ca499f4e65ddd2125446aab5432e0842',
  space: 'vox3jqb8t3cq'
});

const state = {
  events: [],
  users: [],
  open: false
}

function List () {

  // return {
  contentfulClient.getEntries({
    content_type: 'event'
  })
  .then((entries) => {
    state.events = entries.items;
  })

  contentfulClient.getEntries({
    content_type: 'user',
    order: 'fields.name,fields.firstName'
  })
  .then((entries) => {
    state.users = entries.items;
  })
}

// class List extends React.Component {

//   constructor () {
//     super();

//     this.state = {
//       events: [],
//       users: [],
//       open: false
//     }
//   }

//   componentDidMount () {
//       contentfulClient.getEntries({
//         content_type: 'event'
//       })
//       .then((entries) => {
//         this.setState({
//           events: entries.items
//         });
//       })

//       contentfulClient.getEntries({
//         content_type: 'user',
//         order: 'fields.name,fields.firstName'
//       })
//       .then((entries) => {
//         this.setState({
//           users: entries.items
//         });
//       })
//   }

//   render () {
//     return this.state;
//   }
// }

export default List;
