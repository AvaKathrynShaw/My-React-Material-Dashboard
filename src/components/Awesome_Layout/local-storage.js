'use strict';
var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);

const originalLayout = getFromLS('layout') || [];

require('./demo.css');
require('./flexbox.css');

/**
 * This layout demonstrates how to sync to localstorage.
 */

var LocalStorageLayout = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: "layout",
      cols: 12,
      rowHeight: 30
    };
  },

  getInitialState() {
    return {
      layout: JSON.parse(JSON.stringify(originalLayout)),
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
  return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
    }),
    newCounter: 0
    };
  },

  resetLayout() {
    this.setState({
      layout: []
    });
  },

  onLayoutChange(layout) {
    /*eslint no-console: 0*/
    saveToLS('layout', layout);
    this.setState({layout});
  //  this.props.onLayoutChange(layout); // updates status display
  },

  createElement(el) {
  var removeStyle = {
    position: 'absolute',
    right: '2px',
    top: 0,
    cursor: 'pointer'
  };
  var i = el.add ? '+' : el.i;
  return (
    <div key={i} data-grid={el}>
      {el.add ?
        <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
      : <span className="text">{i}</span>}
      <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
    </div>
  );
},

onRemoveItem(i) {
  console.log('removing', i);
  this.setState({items: _.reject(this.state.items, {i: i})});
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

  render() {
    return (
      <div>
        <button onClick={this.resetLayout}>Reset Layout</button>
          <button onClick={this.onAddItem}>Add Item</button>
        <ReactGridLayout
            ref="rgl"
            {...this.props}
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}>

              {_.map(this.state.items, this.createElement)}


        </ReactGridLayout>
      </div>
    );
  }
});

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch(e) {/*Ignore*/}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-7', JSON.stringify({
      [key]: value
    }));
  }
}

module.exports = LocalStorageLayout;
