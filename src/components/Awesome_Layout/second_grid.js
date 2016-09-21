import React from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import SpeedDeskDemo from '../news/demo'
import CardExampleControlled from '../news/ExpandCards';

require('./demo.css');

class MySecondGrid extends React.Component {
  render() {
    var layout = [
  {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  {i: 'c', x: 4, y: 0, w: 1, h: 2},
  {i: 'd', x: 4, y: 0, w: 1, h: 2},
  {i: 'e', x: 4, y: 0, w: 1, h: 2},
];

    return (
      <div>
      <ResponsiveReactGridLayout className="box-layout react-grid-layout" layout={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div className="box-layout react-grid-item" key={"1"}>
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
          </div>
        <div className="box-layout react-grid-item" key={"2"}>
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </div>
        <div className="box-layout react-grid-item" key={"3"}>
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </div>
        <div className="box-layout react-grid-item" key={"4"}>
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </div>
        <div className="box-layout react-grid-item" key={"5"}>
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
        </div>
      </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default MySecondGrid;
