import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ExampleTable from './ExampleTable';
import Reactable from 'reactable';
import ExTable from './ExTable1';
import Parent from './toggle';
import ToggleDisplay from 'react-toggle-display';

const style = {
  height:"400px",
  border: "solid 1px #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff",
};

const topBarStyle = {
  fontSize: "40px",
  textAlign:"left",
  paddingTop:"0px",
  border: "solid 1px #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff"
}

const contentStyle = {
  fontSize: "40px",
  textAlign:"center",
  paddingTop:"60px",
  overflow: "scroll"
};

export default class SortPane extends Component{

  render() {
    return (
      <div>
      <SortablePane
          key="numberone"
          direction="horizontal"
          margin={10}
          onResize={(id, dir, size, rect) => null}
          onOrderChange={(panes) => null}
      >
        <Pane
           width={400}
           height={500}
           style={style}
        >

        <AppBar
          title="Quote Grid"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />

        </Pane>

        <Pane
           width={300}
           height={400}
           style={style}
         >
         <AppBar
           title="Speed Desk"
           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
         />
          <div className="contentStyle">

          Content Here!
            </div>
        </Pane>

        <Pane
           width={200}
           height={200}
           style={style}
        >

        <AppBar
          title="Module"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />

          Content here!


        </Pane>


      </SortablePane>
      </div>
    );
  }
}
