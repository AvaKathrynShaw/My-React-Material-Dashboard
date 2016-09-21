import React from 'react';
import Rnd from 'react-rnd';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ExTable from '../ExTable1';
import SpeedDeskDemo from '../news/demo'



const style = {
  textAlign: 'center',
  padding: '0px',
  border: 'solid 3px #808080',
  borderRadius: '5px',
  color: 'black',
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'top',
  overflow: 'hidden',
};

class DragSquare extends React.Component {

  render() {
     return (
       <Rnd
         ref={c => { this.rnd = c; }}
         initial={{
           width: 500,
           height: 600,
         }}
         className='box-layout'
         style={style}
         minWidth={300}
         minHeight={160}
       >

       <SpeedDeskDemo />

       </Rnd>
     );
   }
}

export default DragSquare;
