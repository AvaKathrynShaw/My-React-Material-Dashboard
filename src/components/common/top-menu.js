import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {blue500, red500, greenA200, white, deepOrange300} from 'material-ui/styles/colors';

require('./demo.css');

const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color={white} className='material-icons.md-18' hoverColor={deepOrange300}/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
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
