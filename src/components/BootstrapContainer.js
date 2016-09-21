import React from 'react';
import AllFilters from './BootstrapFilter'


class Demo extends React.Component {
  render() {
    return (
      <div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>All Types of Filters</div>
                    <div className='panel-body'>
                        <AllFilters />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Demo;
