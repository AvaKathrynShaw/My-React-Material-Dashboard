var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
// Load the full build.
var _ = require('lodash');
// Load the core build.
//var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
//var fp = require('lodash/fp');



require('./demo.css');
require('./flexbox.css');

var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

import SimpleLineChart from '../recharts/chart1'

import SvgIconExampleSimple from '../common/SVGIcon'

import IconMenuExampleSimple from '../common/top-menu'

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var AddRemoveLayout = React.createClass({
  mixins: [PureRenderMixin],


  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 25,
      autoSize: true,
      margin: [5, 5],
      containerPadding: [0,0],
    };
  },

  getInitialState() {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 12, add: i === (list.length - 1).toString()};
      }),
      newCounter: 0
    };
  },

  createElement(el) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 10,
      cursor: 'pointer',
      fontSize: '20px',
      hover: 'orange'
    };
    var removeStyle1 = {
      position: 'absolute',
      right: '40px',
      top: 0,
      cursor: 'pointer',
    };
    var i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el} className='grid-layout container bluebar'>
        {el.add ?
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too. ok">Add +</span>
        : <span className="text" style={removeStyle1}>Title: {i} </span>} <span> <IconMenuExampleSimple /> </span>
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>

        <div>
        <div className="holy-grail">
      <div className="holy-grail__body">
        <div className="holy-grail__content">

          <section className="component__section">

        <SimpleLineChart />
  </section>

          </div>
          </div>
          </div>
        </div>

      </div>
    );
  },

  onAddItem() {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
  //  this.props.onLayoutChange(layout).bind(this);
    this.setState({layout: layout});
  },

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render() {
    return (
      <div >
        <button onClick={this.onAddItem}>Add Item</button>

        <ResponsiveReactGridLayout className="grid-layout react-grid-layout"
        onLayoutChange={this.onLayoutChange}
        onBreakpointChange={this.onBreakpointChange}
            {...this.props}>
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = AddRemoveLayout;
