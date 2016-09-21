import React from 'react';
import {blue500, red500, greenA200, deepOrange500, white} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';


const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const SvgIconExampleSimple = () => (
  <div>
    <HomeIcon style={iconStyles} />
    <HomeIcon style={iconStyles} color={white} />
    <HomeIcon style={iconStyles} color={white} hoverColor={deepOrange500} />
  </div>
);

export default SvgIconExampleSimple;
