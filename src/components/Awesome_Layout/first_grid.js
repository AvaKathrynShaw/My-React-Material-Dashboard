

import React from 'react';
import ReactGridLayout from 'react-grid-layout';
require('./demo.css');

class MyFirstGrid extends React.Component {
  render() {
    var layout = [
  {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];

    return (
      <div>
        <ReactGridLayout className="box-layout react-grid-layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div className="box-layout react-grid-item" key={'a'}>a</div>
            <div className="box-layout react-grid-item" key={'b'}>b</div>
              <div className="box-layout react-grid-item" key={'c'}>c</div>
      </ReactGridLayout>
      </div>
    );
  }
}

export default MyFirstGrid;
