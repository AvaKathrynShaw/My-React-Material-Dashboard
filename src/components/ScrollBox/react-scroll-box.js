// ES2015
import React from 'react'
import Measure from 'react-measure';

const { Component, Children, PropTypes } = React

class Block extends Component {
  render() {
    return (
      <div style={{ display: 'flex', width: 200 }}>
        <div style={{ flex: '1 1 200px' }}>
          <div style={{ overflow: 'hidden',  backgroundColor: 'red' }}>
            <div style={{ width: 300, height: 150 }}/>
          </div>
        </div>
      </div>
    )
  }
}

class AnimatingChild extends Component {
  render() {
    const { animate } = this.props
    return (
      <Measure>
        {dimensions =>
          <div className={`square ${animate ? 'animate' : ''}`}>
            <strong>
              {animate ? 'Click to stop animating' : 'Click to animate'}
            </strong>
            {Object.keys(dimensions).map((dimension, i) =>
              <div key={i}>{dimension}: {dimensions[dimension]}</div>
            )}
          </div>
        }
      </Measure>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }
  }

  render() {
    const { animate } = this.state
    return (
      <div>
        <div onClick={() => this.setState({ animate: !animate })}>
          <AnimatingChild animate={animate}/>
        </div>
        <Measure
          accurate
          onMeasure={dimensions => {
            console.log(dimensions)
          }}
        >
          <Block/>
        </Measure>
      </div>
    )
  }
}
