require('normalize.css');
require('styles/App.scss');

import React from 'react';
import {
  orange500, cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500, grey800,
  blueGrey100, blueGrey300, blueGrey400, blueGrey500,
  amber100, amber300, amber400, amber500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';



class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme({
      palette: {
        primary1Color: grey800,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: grey800,
        alternateTextColor: white,
        canvasColor: grey100,
        borderColor: grey300,
        pickerHeaderColor: cyan500,
        shadowColor: fullBlack,
      },
      appBar: {
        height: 30,
      },
})
    });
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }

  render() {
    var navTitleStyle = {
      marginLeft: '-8px'
    };

    return (
      <div id="main">
        <AppBar
          title="React Material Dashboard"
          onLeftIconButtonTouchTap={this.toggleNavigation}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="NAV"
            showMenuIconButton={true}
            titleStyle={navTitleStyle}
            iconElementLeft={<IconButton onTouchTap={this.toggleNavigation}><NavigationClose /></IconButton>}
          />


          <h3>Containers</h3>
          <Link to="/home" className="nav-link">
            <MenuItem> Draggable </MenuItem>
          </Link>
          <Link to="/grid" className="nav-link">
            <MenuItem> Snap Grid </MenuItem>
          </Link>
          <Link to="/grid2" className="nav-link">
            <MenuItem> Snap Grid 2 </MenuItem>
          </Link>
          <Link to="/grid3" className="nav-link">
            <MenuItem> Snap Grid 3 </MenuItem>
          </Link>
          <Link to="/grid4" className="nav-link">
            <MenuItem> Snap Grid 4 </MenuItem>
          </Link>
          <Link to="/grid5" className="nav-link">
            <MenuItem> Snap Grid 5 </MenuItem>
          </Link>
          <Link to="/UIGrid"  className="nav-link">
            <MenuItem> UI Layout </MenuItem>
          </Link>
          <Link to="/cards" className="nav-link">
            <MenuItem> Cards </MenuItem>
          </Link>
          <Link to="/square"  className="nav-link">
            <MenuItem> Draggable Squares </MenuItem>
          </Link>
          <Divider />



          <h3>Table Components</h3>
          <Link to="/table1"  className="nav-link">
            <MenuItem> ReactTable </MenuItem>
          </Link>
          <Link to="/table"  className="nav-link">
            <MenuItem> Material-UI Table </MenuItem>
          </Link>
          <Link to="/table2"  className="nav-link">
            <MenuItem> Bootstrap Filter </MenuItem>
          </Link>
          <Link to="/table3"  className="nav-link">
            <MenuItem> Bootstrap Table Complex </MenuItem>
          </Link>
          <Link to="/griddle1"  className="nav-link">
            <MenuItem> Griddle Table </MenuItem>
          </Link>
          <Link to="/griddle2"  className="nav-link">
            <MenuItem> Griddle Table </MenuItem>
          </Link>
          <Link to="/largeGrid"  className="nav-link">
            <MenuItem> Ag Grid </MenuItem>
          </Link>
          <Divider />



          <h3>Speed Desk Components</h3>
          <Link to="/news1"  className="nav-link">
            <MenuItem> Material UI News </MenuItem>
          </Link>
          <Link to="/news2"  className="nav-link">
            <MenuItem> Material UI Grid News </MenuItem>
          </Link>
          <Link to="/news3"  className="nav-link">
            <MenuItem> CSS Only Flexbox News </MenuItem>
          </Link>

          <Divider />
          <h3>Charts</h3>

          <Link to="/chart1"  className="nav-link">
            <MenuItem> Line Chart </MenuItem>
          </Link>

          <Link to="/chart2"  className="nav-link">
            <MenuItem> Tiny Line Chart </MenuItem>
          </Link>

          <Link to="/chart3"  className="nav-link">
            <MenuItem> Radial Chart </MenuItem>
          </Link>

          <Link to="/chart4"  className="nav-link">
            <MenuItem> Area Chart </MenuItem>
          </Link>

          <Link to="/chartIQ"  className="nav-link">
            <MenuItem> Chart IQ </MenuItem>
          </Link>



          <Divider />
          <h3>Scroll Containers</h3>

          <Link to="/scroll-container"  className="nav-link">
            <MenuItem> Scroll Container </MenuItem>
          </Link>

        </Drawer>


        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Layout;
