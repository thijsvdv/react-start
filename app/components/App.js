/*
  App
*/
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar'
import { getEntries, getUsers } from '../services/contentfulService';
import styles from '../styles/navbar.css';

// require.ensure([], () => {

//     const getMuiTheme = require('material-ui/styles/getMuiTheme');
//     const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
//     const Navbar = require('./Navbar');

// }, 'navbar');

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      events: [],
      users: []
    }
  }

  componentDidMount () {
      getEntries().then((entries) => {
        this.setState({
          events: entries.items
        });
        // console.log('this.state', this.state);
      })

      getUsers().then((entries) => {
        this.setState({
          users: entries.items
        });
        // console.log('this.state', this.state);
      })
  }

  render () {
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
