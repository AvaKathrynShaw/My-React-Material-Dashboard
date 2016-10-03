
import React from 'react';

class AjaxChart extends React.Component {

  render()
   {
     const Style={
       height: '600px',
       width: '100%',
       backgroundColor: 'white'
     }



     return (
     <div style={Style}>
       <iframe style={Style} src="file:///C:\Users\Ava\Desktop\Material-UI-Projects\react-material-dashboard-master\src\components\chartIQ\chartiq.html"></iframe>
     </div>


    );
  }
}


export default AjaxChart;
