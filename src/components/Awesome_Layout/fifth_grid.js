var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
import SimpleLineChart from '../recharts/chart1'
import SvgIconExampleSimple from '../common/SVGIcon'
import IconMenuExampleSimple from '../common/top-menu'


const originalLayouts = getFromLS('layouts') || {};

require('./demo.css');
require('./flexbox.css');

/**
 * This layout demonstrates how to sync to localstorage.
 */
 const removeStyle = {
   position: 'absolute',
   right: '20px',
   top: 10,
   cursor: 'pointer',
   fontSize: '20px',
   hover: 'orange'
 };
 const removeStyle1 = {
   position: 'absolute',
   left: '40px',
   padding: '5px',
   top: 0,
   cursor: 'pointer',
 };

var FifthGirdLayout = React.createClass({
  mixins: [PureRenderMixin],

   getDefaultProps() {
     return {
       className: "layout",
       cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
       rowHeight: 30
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
           className='grid-layout container bluebar'
           data-grid={{w: 2, h: 3, x: 0, y: 0}}>


           <span className="text" style={removeStyle1}> <h4> Quote Grid </h4> </span>

           <span> <IconMenuExampleSimple /> </span>

           <span className="remove" style={removeStyle}>x</span>

           <div>
              <div className="holy-grail">
                <div className="holy-grail__body">
                  <div className="holy-grail__content">

                  <section className="component__section">

                    <p>Content Here</p>

                  </section>

                  </div>
                </div>
             </div>
           </div>






           </div>


           <div key="Speed Desk"
           className='grid-layout container bluebar'
           data-grid={{w: 2, h: 3, x: 2, y: 0}}>
                      <span className="text">2</span>
           </div>



           <div key="Chart"
           className='grid-layout container bluebar'
           data-grid={{w: 2, h: 3, x: 4, y: 0}}>
                      <span className="text">3</span>
            </div>



           <div key="Ticker Comparison"
           className='grid-layout container bluebar'
           data-grid={{w: 2, h: 3, x: 6, y: 0}}>
                      <span className="text">4</span>
            </div>




           <div key="Chat"
           className='grid-layout container bluebar'
           data-grid={{w: 2, h: 3, x: 8, y: 0}}>
                    <span className="text">5</span>
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
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch(e) { console.log("local storage not working")}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-7', JSON.stringify({
      [key]: value
    }));
  }
}

module.exports = FifthGirdLayout;
