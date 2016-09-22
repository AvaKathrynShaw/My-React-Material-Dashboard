// ES2015
import React from 'react'
import Dimensions from 'react-dimensions'

class MyComponent extends React.Component {
  render(){ return (
    <div
      containerWidth={this.props.containerWidth}
      containerHeight={this.props.containerHeight}
    >
    <p>Im some content</p>
    </div>
  )
}
}

export default Dimensions()(MyComponent) // Enhanced component
