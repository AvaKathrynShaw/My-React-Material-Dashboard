import React from 'react';
import CardExampleControlled from './ExpandCards';

class SpeedDeskDemo extends React.Component {
  render() {
    return (
          <div>
          <h1>Speed Desk</h1>
            <CardExampleControlled />
              <CardExampleControlled />
                <CardExampleControlled />
                  <CardExampleControlled />
                    <CardExampleControlled />

            </div>


    );
  }
}

export default SpeedDeskDemo;
