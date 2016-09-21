import React from 'react';
import DragSquare from './DraggableSquare';

class DragSquareLayout extends React.Component {
  render() {
    return (
          <div>
          <h1>Draggable Layout</h1>
          <DragSquare />
            <DragSquare />
              <DragSquare />
                <DragSquare />
            </div>


    );
  }
}

export default DragSquareLayout;
