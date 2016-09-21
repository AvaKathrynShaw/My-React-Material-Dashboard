import React from 'react';
import FullWidthSection from './FullWidthSection'
import Widget from './Widget';
import SortPane from './Pane';

class Home extends React.Component {
  render() {
    return (
      <div>
        <FullWidthSection useContent={true}>
        <SortPane />
        </FullWidthSection>
      </div>
    );
  }
}

export default Home;
