import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpandChange (expanded) {
    this.setState({expanded: expanded});
  };

  handleToggle (event, toggle) {
    this.setState({expanded: toggle});
  };

  handleExpand ()  {
    this.setState({expanded: true});
  };

  handleReduce ()  {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
        <CardHeader
          title="Apple leaning on Magna for help with car aspirations, Bloomber reports"
          subtitle="About a dozen engineers from Magna (MGA) have..."
          avatar="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Apple leaning on Magna for help with car aspirations, Bloomberg reports" subtitle="Source: The Fly" />}
        >
        <img src="http://bit.ly/2cdbwal" />
        </CardMedia>
        <CardTitle subtitle="15 September 2016 02:38PM" expandable={true} />
        <CardText expandable={true}>
          - About a dozen engineers from Magna (MGA) have been working with Apples
           (AAPL) "Project Titan" team to develop a vehicle, according to Bloomberg,
           citing a person familiar with the arrangement. The Fly notes that a prior report
            from April suggested Apple was planning to have subsidiary Magna Steyr, a contract
             automobile maker and unit of Magna International,  manufacture its cars.
             <br />
          <FlatButton label="View Site" onTouchTap={this.handleExpand.bind(this)} />
          <FlatButton label="Open Tearsheet" onTouchTap={this.handleExpand.bind(this)} />
          <FlatButton label="Close" onTouchTap={this.handleReduce.bind(this)} />
        </CardText>
      </Card>
    );
  }
}
