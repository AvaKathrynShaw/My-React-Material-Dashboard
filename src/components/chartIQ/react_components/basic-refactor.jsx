
import React from 'react';

import Dimensions from 'react-dimensions'


class Quickstart extends React.Component {

  componentDidMount() {

  var stxx1=new STXChart({container:$$$(".chartContainer1"),layout:{"chartType": "candle","candleWidth": 16, "crosshair":true}});
  var stxx2=new STXChart({container:$$$(".chartContainer2"),layout:{"chartType": "line"}});
  var stxx3=new STXChart({container:$$$(".chartContainer3"),layout:{"chartType": "mountain"}});

  stxx1.yaxisLabelStyle="roundRectArrow";
  stxx1.chart.xAxis.displayGridLines=false;
  stxx1.chart.allowScrollPast=true;
  stxx1.chart.panel.yAxis.idealTickSizePixels=100;

  stxx1.newChart("SPY", sampleData);
  stxx2.newChart("IBM", sampleData);
  stxx3.newChart("GE", sampleData);

  console.log("Component did mount")
  console.log(stxx1);


}


  render()
   {

     const Style = {
       height:'200px',
       position:'relative',
       width:'100%',
       backgroundColor:'white',
       color: 'purple'
     }

     const Style2={
       width:'100%'
     }

     const Style3={
       display:'none'
     }





    return (
<div>
<div className="stx-wrapper" style={Style2}>

  <div className="stx-nav">
      <div className="stx-search">
        <input type="text" id="symbol" data-name="symbol" autoCapitalize="off" autoCorrect="on" data-spellcheck="off" className="stx-input-field" />
      </div>
    </div>






<div className="chartContainer1" style={Style}></div>

  <div className="stx-nav">
      <div className="stx-search">
        <input type="text" id="symbol" data-name="symbol" autoCapitalize="off" autoCorrect="on" data-spellcheck="off" className="stx-input-field" />
      </div>
    </div>

<div className="chartContainer2" style={Style}></div>

  <div className="stx-nav">
      <div className="stx-search">
        <input type="text" id="symbol" data-name="symbol" autoCapitalize="off" autoCorrect="on" data-spellcheck="off" className="stx-input-field" />
      </div>
    </div>

<div className="chartContainer3" style={Style}></div>

</div>

</div>


    );
  }
}
const EnhancedComponent = Dimensions({elementResize: true})(Quickstart)

export default EnhancedComponent;
