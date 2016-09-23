require('./demo.css');
import React from 'react';
import App from './app';
import Dimensions from 'react-dimensions'

class ComplexDemo extends React.Component {
  render() {
    return (
      <div className='col-md-offset-1 col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>A Complex Example</div>
          <div className='panel-body'>
            <App />
          </div>
        </div>
      </div>
    );
  }
}

export default ComplexDemo;
