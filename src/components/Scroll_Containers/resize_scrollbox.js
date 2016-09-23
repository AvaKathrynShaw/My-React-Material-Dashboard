var React = require('react');
import { Scrollbars } from 'react-custom-scrollbars';

import Dimensions from 'react-dimensions'

var ResizeScrollBox = React.createClass({

   render() {
     return (
                  <Scrollbars
                  style={{ height: this.props.containerWidth }}>
                  <div>
                   <h1> Hello World </h1>
                  </div>
                  </Scrollbars>
     );
   }
 });


 const EnhancedComponent = Dimensions({elementResize: true})(ResizeScrollBox)
 export default EnhancedComponent;
