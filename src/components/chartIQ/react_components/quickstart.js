require('../css/*');
import React from 'react';


class Quickstart extends React.Component {
  componentWillMount() {
    const script = document.createElement("script");

    script.src = "";
    script.async = true;

    document.body.appendChild(script);
},

  render() {
    return (
      <body onLoad="displayChart()">
      <div class="chartContainer" style="width:800px;height:460px;position:relative;"><div></div></div>
      </body>
    );
  }
}

export default Quickstart;
