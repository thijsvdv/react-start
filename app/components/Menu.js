import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Menu extends React.Component {

  constructor (props) {
    super(props);
    this.state = { open: false };
    // console.log('state', this.state);
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false});
  }

  render () {
    return (
      <div className="menu">
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          className="menu"
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/">Home</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/users">Users</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/events">Events</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/about">About</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Menu;
