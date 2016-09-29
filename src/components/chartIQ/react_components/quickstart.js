
import React from 'react';


class Quickstart extends React.Component {

  componentDidMount() {

    var stxx=new STXChart(this.chartContainer); // Declare a STXChart object. This is the main object for drawing charts.

    stxx.newChart("SPY", sampleData);


}


  render()
   {

     const Style = {
       width:'800px',
       height:'460px',
       position:'relative'
     }


    return (

      <div id="quickStart" className="chartContainer" style={Style} ref={(c)=>this.chartContainer=c}></div>

    );
  }
}

export default Quickstart;
