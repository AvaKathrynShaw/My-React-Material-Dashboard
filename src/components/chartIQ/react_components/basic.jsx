
import React from 'react';

import Dimensions from 'react-dimensions'


class Quickstart extends React.Component {

componentWillMount() {
   console.log('Component WILL MOUNT!')
}

componentDidMount() {
   console.log('Component DID MOUNT!')

   var stxx = new STXChart({
     container: $$$(".chartContainer"),layout:{"chartType": "mountain"}
 }); // Declare a STXChart object. This is the main object for drawing charts. // Declare a STXChart object. This is the main object for drawing charts.

 stxx.chart.yAxis.goldenRatioYAxis = true;
 stxx.chart.xAxis.axisType = "ntb";

 stxx.newChart("SPY", sampleData);

 stxx.addSeries("Series-Name", {
 color: "green",
 data: getDataFromServer("someFieldIwantToAdd"),
 marginTop: 100, // give room for the legend
});

// This is just dummy code for streaming quotes (randomly generated to update the last tick)
setInterval(function() {
 var newQuote = STX.clone(stxx.currentQuote());
 var sdata = newQuote["Series-Name"] + Math.round((Math.random() - .5) * 100) / 100;
 stxx.streamTrade({
   last: sdata
 }, newQuote.DT.setDate(newQuote.DT.getDate() + 1), "Series-Name");
}, 2000);
}

componentWillReceiveProps(newProps) {
   console.log('Component WILL RECIEVE PROPS!')

   // This is just dummy code for generating series data. In real life you'll want to get the actual
   // data for the stock symbol. Create an array of {DT, Value}

}

shouldComponentUpdate(newProps, newState) {
   return true;
}

componentWillUpdate(nextProps, nextState) {
   console.log('Component WILL UPDATE!');
}

componentDidUpdate(prevProps, prevState) {
   console.log('Component DID UPDATE!')
}

componentWillUnmount() {
   console.log('Component WILL UNMOUNT!')
}


  render()
   {

     const Style = {
       height:this.props.containerWidth*(1/2),
       position:'relative',
       width:this.props.containerWidth
     }

     function getDataFromServer(symbol) {
      var newData = [];
      newData[0] = {
        DT: stxx.masterData[0].DT,
        Value: stxx.masterData[0]["Close"]
      };

      dataSart = 2;
      dataEnd = stxx.masterData.length;

      for (var i = dataSart; i < dataEnd; i++) {
        // For each series, use the stock symbol name as the field name
        newData.push({
          DT: stxx.masterData[i].DT,
          Value: newData[newData.length - 1].Value + Math.round((Math.random() - .5) * 100) / 100
        });
      }

      return newData;
     }


    return (

      <div id="quickStart" className="chartContainer" style={Style} ref={(c)=>this.chartContainer=c}></div>

    );
  }
}
const EnhancedComponent = Dimensions({elementResize: true})(Quickstart)

export default EnhancedComponent;
