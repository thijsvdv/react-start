import React from 'react';
import { Link } from 'react-router';

const Users = () => {
  return {
    
    renderUser(key) {
      // console.log('user', this.props.users);
      return <li key={key}><Link to={`/user/${this.props.users[key].fields.slug}`}>{this.props.users[key].fields.name} {this.props.users[key].fields.firstName}</Link></li>
    },
    
    render() {
      return (
        <div className="users">
          <h1>Users</h1>
          
          <ol>
            {Object.keys(this.props.users).map(this.renderUser.bind(this))}
          </ol>
          
        </div>
      )
    }
  }
}

export default Users;