
import React from 'react';

import Dimensions from 'react-dimensions'


class Quickstart extends React.Component {

  componentDidMount() {

    var stxx=new STXChart(this.chartContainer); // Declare a STXChart object. This is the main object for drawing charts.

    stxx.newChart("SPY", sampleData);


}


  render()
   {

     const Style = {
       height:this.props.containerWidth*(1/2),
       position:'relative',
       width:this.props.containerWidth
     }


    return (

      <div id="quickStart" className="chartContainer" style={Style} ref={(c)=>this.chartContainer=c}></div>

    );
  }
}
const EnhancedComponent = Dimensions({elementResize: true})(Quickstart)

export default EnhancedComponent;
