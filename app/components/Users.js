import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Users = ({users}) => {
  return {

    componentDidMount () {
      var elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 0;
      window.requestAnimationFrame(function () {
        elem.style.transition = 'opacity 1000ms';
        elem.style.opacity = 1;
      });
    },

    renderUser (key) {
      let user = this.props.users[key].fields;
      return <li key={key}><Link to={`/user/${user.slug}`}>{user.name} {user.firstName}</Link></li>
    },

    render () {
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
