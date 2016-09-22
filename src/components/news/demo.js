import React from 'react';
import CardExampleControlled from './ExpandCards';

class SpeedDeskDemo extends React.Component {
  render() {
    return (
          <div className='compact'>
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
