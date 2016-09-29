var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
import SimpleLineChart from '../recharts/chart1';
import SvgIconExampleSimple from '../common/SVGIcon';
import IconMenuExampleSimple from '../common/top-menu';
import SpeedDeskDemo from '../news/demo'
import AreaChart from '../recharts/area_chart'
import { Scrollbars } from 'react-custom-scrollbars';
import FirstGriddle from '../griddle/second_griddle';
import Quickstart from '../chartIQ/react_components/quickstart';
import IconMenuExample2 from '../common/menu-button';
import ResizeScrollBox from '../Scroll_Containers/resize_scrollbox'
var FontAwesome = require('react-fontawesome');


const originalLayouts = getFromLS('layouts') || {};

require('./demo.css');
require('./flexbox.css');

/**
 * This layout demonstrates how to sync to localstorage.
 */
 const removeStyle = {
   position: 'absolute',
   right: '20px',
   top: 0,
   cursor: 'pointer',
   fontSize: '20px',
   hover: 'orange',

 };

 const removeStyle1 = {
   position: 'absolute',
   left: '40px',
   padding: '0px',
   top: 0,
   cursor: 'pointer',

 };



var FifthGirdLayout = React.createClass({
  mixins: [PureRenderMixin],

   getDefaultProps() {
     return {
       className: "layout",
       cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
       rowHeight: 30,
       margin: [5, 5],
       containerPadding: [0,0],
     };
   },

   getInitialState() {
     return {
       layouts: JSON.parse(JSON.stringify(originalLayouts))
     };
   },

   resetLayout() {
     this.setState({layouts: {}});
   },

   onLayoutChange(layout, layouts) {
     saveToLS('layouts', layouts);
     this.setState({layouts});
     //this.props.onLayoutChange(layout, layouts);
   },

   render() {
     return (
       <div>
         <button onClick={this.resetLayout}>Reset Layout</button>
         <ResponsiveReactGridLayout
             ref="rrgl"
             {...this.props}
             layouts={this.state.layouts}
             onLayoutChange={this.onLayoutChange}
             className='grid-layout'>



          <div key="Quote Grid"
           className='grid-layout bluebar compactOverride'
           data-grid={{w: 2, h: 3, x: 0, y: 0}}>




           <h6> Quote Grid </h6>
           <div style={removeStyle}><IconMenuExampleSimple /></div>

           <div className="compactOverride">
              <div className="holy-grail compactOverride">
                <div className="holy-grail__body compactOverride">
                  <div className="holy-grail__content compactOverride">
                  <Scrollbars style={{ height: 600 }}>
                  <section className="component__section compactOverride">

                    <FirstGriddle />

                  </section>
                  </Scrollbars>
                  </div>
                </div>
             </div>
           </div>
         </div>


           <div key="Speed Desk"
           className='grid-layout container bluebar compact'
           data-grid={{w: 2, h: 3, x: 2, y: 0}}>


           <h6> Speed Desk </h6>
           <span style={removeStyle}><IconMenuExampleSimple /></span>

           <div>
              <div className="holy-grail">
                <div className="holy-grail__body">
                  <div className="holy-grail__content">
                  <Scrollbars style={{ height: 300 }}>
                  <section className="component__section">

                    <SpeedDeskDemo />

                  </section>
                  </Scrollbars>
                  </div>
                </div>
             </div>
           </div>



           </div>



           <div key="Chart"
           className='grid-layout container bluebar compact'
           data-grid={{w: 5, h: 10, x: 4, y: 0}}>



           <h6> Chart </h6>
           <span style={removeStyle}><IconMenuExampleSimple /></span>

           <div>
              <div className="holy-grail">
                <div className="holy-grail__body">
                  <div className="holy-grail__content">

                  <Scrollbars


                  style={{ height: 600 }}>
                  <section className="component__section">

                    <Quickstart />

                  </section>
                  </Scrollbars>



                  </div>
                </div>
             </div>
           </div>






            </div>



           <div key="Ticker Comparison"
           className='grid-layout container bluebar compact'
           data-grid={{w: 2, h: 3, x: 6, y: 0}}>




           <h6> Ticker Comparison </h6>
           <span style={removeStyle}><IconMenuExampleSimple /></span>

           <div>
              <div className="holy-grail">
                <div className="holy-grail__body">
                  <div className="holy-grail__content">

                  <section className="component__section">

                  Content here

                  </section>

                  </div>
                </div>
             </div>
           </div>







            </div>




           <div key="Chat"
           className='grid-layout container bluebar compact'
           data-grid={{w: 2, h: 3, x: 8, y: 0}}>


           <h6> Chat </h6>
           <span style={removeStyle}><IconMenuExampleSimple /></span>

           <div>
              <div className="holy-grail">
                <div className="holy-grail__body">
                  <div className="holy-grail__content">

                  <section className="component__section">

                    <FontAwesome name='rocket' />

                  </section>

                  </div>
                </div>
             </div>
           </div>




           </div>






         </ResponsiveReactGridLayout>
       </div>
     );
   }
 });


 function getFromLS(key) {
   let ls = {};
   if (global.localStorage) {
     try {
       ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
     } catch(e) {console.log('Failed to write to storeage');}
   }
   return ls[key];
 }




 function saveToLS(key, value) {
   if (global.localStorage) {
     global.localStorage.setItem('rgl-8', JSON.stringify({
       [key]: value
     }));
   }
 }


module.exports = FifthGirdLayout;
