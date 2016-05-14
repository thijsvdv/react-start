/*
  User
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const User = () => {

  return {
    
    componentDidMount() {
      var elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 0;
      window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 1000ms";
        elem.style.opacity = 1;
      });
    },
    
    render() {
      if(this.props.users !== undefined && this.props.users.length > 0) {
        const users = this.props.users;
        const user = users.filter((u) => {
          return u.fields.slug === this.props.params.userid;
        })[0].fields;
        console.log("USER", user);
        
        return (
          <div className="user">
            <h1>{user.fullName}</h1>
            <p>{user.bio}</p>
            <p><Link to="/users">Back to users</Link></p>
          </div>
        )
      } else {
        return (
          <div className="notfound">
            No user found
          </div>
        )
      }
    }
    
  }
}

export default User;