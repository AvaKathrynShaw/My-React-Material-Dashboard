import React from 'react';

class ChartIQFirst extends React.Component {

  componentWillMount() {
      const script = document.createElement("script");

      script.src = "http://demo.chartiq.com/STX_SAMPLE_DAILY.js";
      script.async = true;

      document.body.appendChild(script);


      const script1 = document.createElement("script1");

      script1.src = "http://demo.chartiq.com/js/stxThirdParty.js";
      script1.async = true;

      document.body.appendChild(script1);


      const script2 = document.createElement("script2");

      script2.src = "http://demo.chartiq.com/js/stx.js";
      script2.async = true;

      document.body.appendChild(script2);

      const script3 = document.createElement("script3");

      script3.src = "http://demo.chartiq.com/js/stxKernelOs.js";
      script3.async = true;

      document.body.appendChild(script3);
  }


  render() {

    var stxx=new STXChart(
    {container:$$$(".chartContainer")}
    ); // Declare a STXChart object. This is the main object for drawing charts.

    stxx.newChart("SPY", sampleData, null, function () {
   // add anything you want done in the callback
      });


    return (
      <div class="chartContainer" style="width:600px;height:400px;position:relative;"></div>
    );
  }
}

export default ChartIQFirst;
