import React, { Component } from 'react';


export default class Parent extends React.Component {

  constructor() {
    super();
      this.state = {
  		isHidden: true
  	};
  }

  toggleHidden() {
    this.setState({
      isHidden: this.state.isHidden ? false : true
    });
  }

  render() {
  	return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show modal
        </button>
        {!this.state.isHidden &&  <Child />}
      </div>
  	);
  }
}

class Child extends React.Component {
  render() {
    return (
    <div className="modal">
        Hello World
    </div>
    )
  }
}
