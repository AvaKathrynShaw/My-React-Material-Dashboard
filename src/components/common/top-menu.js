import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {blue500, red500, greenA200, white, deepOrange300} from 'material-ui/styles/colors';
var FontAwesome = require('react-fontawesome');
require('./demo.css');


const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={
        <FontAwesome name='ellipsis-v' />}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Close" />
    </IconMenu>

  </div>
);

export default IconMenuExampleSimple;
