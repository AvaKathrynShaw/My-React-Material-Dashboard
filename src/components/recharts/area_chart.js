import React from 'react';
import ReactDom from 'react-dom'

require('./demo.css');

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';

import Dimensions from 'react-dimensions'


const data = [
      {name: 'Page A', uv: 4000, pv: 9000},
      {name: 'Page B', uv: 3000, pv: 7222},
      {name: 'Page C', uv: 2000, pv: 6222},
      {name: 'Page D', uv: 1223, pv: 5400},
      {name: 'Page E', uv: 1890, pv: 3200},
      {name: 'Page F', uv: 2390, pv: 2500},
      {name: 'Page G', uv: 3490, pv: 1209},
];

/*var propTypes = {
containerWidth: PropTypes.number.isRequired,
containerHeight: PropTypes.number.isRequired
};*/

class AreaChartDemo extends React.Component {

  render () {
  	return (
    	<div>
      	<h4>A demo of synchronized AreaCharts</h4>
        <AreaChart width={this.props.containerWidth} height={this.props.containerWidth/2} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
        <p>Maybe some other content</p>
        <AreaChart width={this.props.containerWidth} height={this.props.containerWidth/2} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
      </div>
    );
  }
}

const EnhancedComponent = Dimensions({elementResize: true})(AreaChartDemo)

export default EnhancedComponent;
