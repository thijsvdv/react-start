import contentful from 'contentful'

const accessToken = '3504f58d8ba65f1ad9bd4650b5c0ee09ca499f4e65ddd2125446aab5432e0842';
const space = 'vox3jqb8t3cq';

const contentfulClient = contentful.createClient({
  accessToken,
  space
});

export function getEntries() {
  let entries = contentfulClient.getEntries({
    content_type: 'user',
    order: 'fields.name,fields.firstName'
  });
  return entries;
}

export function getUsers() {
  let users = contentfulClient.getEntries({
    content_type: 'user',
    order: 'fields.name,fields.firstName'
  });
  return users;
}


// contentfulClient.getEntries({ skip: 5, limit: 5, order: '-sys.createdAt' })
// contentfulClient.getContentType('user')
// contentfulClient.getEntries({
//   content_type: 'event'
// })

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