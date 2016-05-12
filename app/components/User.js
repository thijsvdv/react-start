/*
  User
*/
import React from 'react';

const User = () => {

  return {
    
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