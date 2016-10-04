
import React from 'react';

import Dimensions from 'react-dimensions'


class Quickstart extends React.Component {

  constructor(props) {
  super(props);

}


  componentDidMount() {

    this.stxx1=new STXChart({container:$$$(".chartContainer1"),layout:{"chartType": "candle","candleWidth": 16, "crosshair":true}});
    this.stxx2=new STXChart({container:$$$(".chartContainer2"),layout:{"chartType": "line"}});
    this.stxx3=new STXChart({container:$$$(".chartContainer3"),layout:{"chartType": "mountain"}});



  /*stxx1.yaxisLabelStyle="roundRectArrow";
  stxx1.chart.xAxis.displayGridLines=false;
  stxx1.chart.allowScrollPast=true;
  stxx1.chart.panel.yAxis.idealTickSizePixels=100; */

  //testing function calls

  //stxx1.setChartType('line');

  this.stxx1.setPeriodicityV2(1, 15, "minute", function(err){ console.log ("Period not set")});

  this.stxx1.newChart("SPY", sampleData);
  this.stxx2.newChart("IBM", sampleData);
  this.stxx3.newChart("GE", sampleData);

  console.log("Component did mount");
  console.log(this)
  console.log(this.stxx1);
}

  render()
   {
     console.log('We are in render');
     console.log(this);
     console.log(this.stxx1);

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

  <div className="stx-menus stx-basic">
    <div className="stx-btn stx-menu-btn stxMenu">Chart<em></em>
      <ul id="chart-display" className="chart-display menuSelect menuOutline" style={Style3}>
        <li className="stx-heading">Chart Style</li>
        <li>Candle</li>
        <li>Bar</li>
        <li>Line</li>
      </ul>
    </div>
    <div className="stx-btn stx-menu-btn stxMenu">Studies
      <div id="studies" className="studies menuSelect menuOutline" style={Style3}>
        <ul className="col">
          <li>Volume</li>
          <li>Vol Underlay</li>
        </ul>
      </div>
    </div>
    <div id="cogBtn" className="stx-btn stx-menu-btn stxMenu">&nbsp;<em></em>
        <ul id="cog" className="cog menuSelect menuOutline" style={Style3}>
          <li className="stx-heading">Default Themes</li>
          <li className="stx-menu-content">
            <ul className="menuSelect" id="builtInThemeSelector">
              <li>White</li>
              <li>Black</li>
            </ul></li>
          <li className="stx-menu-content">
            <ul className="injected" id="customThemeSelector">
              <li className="stx-heading">Custom Themes</li>
              <li className="themeSelectorTemplate" style={{display:'none'}}><a className="stxItem"></a>
                <div className="stx-btn stx-ico"><span className="stx-ico-close stxClose">x</span></div>
              </li>
            </ul>
          </li>
          <li className="stx-menu-content"><div className="stx-btn theme">New Custom Theme</div></li>
       </ul>
    </div>
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



    );
  }
}

const EnhancedComponent = Dimensions({elementResize: true})(Quickstart)

export default EnhancedComponent;
