import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExampleCards from './components/ExampleCards';
import ExampleTable from './components/ExampleTable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, useRouterHistory } from 'react-router';
import {createHashHistory} from 'history';
import ExTable from './components/ExTable1';
import AllFilters from './components/BootstrapFilter'
import Demo from './components/BootstrapContainer'
import ComplexDemo from './components/complex/demo'
import CardExampleControlled from './components/news/ExpandCards'
import SpeedDeskDemo from './components/news/demo'
import GridListExampleComplex from './components/grid_news/grid_news'
import DragSquareLayout from './components/RND/SquareContainer'
import MyFirstGrid from './components/Awesome_Layout/first_grid'
import MySecondGrid from './components/Awesome_Layout/second_grid'
import AddRemoveLayout from './components/Awesome_Layout/third_grid'
import MyLineChart from './components/Charts/basic_chart'
import SimpleLineChart from './components/recharts/chart1'
import TinyLineChart from './components/recharts/tiny_line_line_chart'
import SimpleRadialChart from './components/recharts/radial_chart'
import ChartIQFirst from './components/small_chartIQ/my_first_chartIQ'
import LocalStorageLayout from './components/Awesome_Layout/local-storage'
import FifthGirdLayout from './components/Awesome_Layout/fifth_grid'
import AreaChart from './components/recharts/area_chart'
import FlexBoxNews from './components/grid_news/flex_box_news'
import ScrollContainer from './components/ScrollBox/react-scroll-box'
import Quickstart from './components/chartIQ/react_components/quickstart'
import FirstGriddle from './components/griddle/first_griddle'
import SecondGriddle from './components/griddle/second_griddle'
import LargeGrid from './components/ag-large/largeGrid';
import UIGrid from './components/Awesome_Layout/ui_only/fifth_grid'
import ChartIQ2 from './components/chartIQ/react_components/basic'
import AjaxChart from './components/chartIQ/react_components/IQ_ajx'

injectTapEventPlugin();

ReactDOM.render(
    <Layout />,
  document.getElementById('app')
);

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'cards', component: ExampleCards },
    { path: 'table', component: ExampleTable },
    { path: 'table1', component: ExTable },
    { path: 'table2', component: Demo },
    { path: 'table3', component: ComplexDemo },
    { path: 'news1', component: SpeedDeskDemo },
    { path: 'news2', component: GridListExampleComplex },
    { path: 'square', component: DragSquareLayout },
    { path: 'grid', component: MyFirstGrid },
    { path: 'grid2', component: MySecondGrid },
    { path: 'grid3', component: AddRemoveLayout },
    { path: 'chart1', component: SimpleLineChart },
    { path: 'chart2', component: TinyLineChart },
    { path: 'chart3', component: SimpleRadialChart },
    { path: 'grid4', component: LocalStorageLayout },
    { path: 'chartIQ', component: Quickstart },
    { path: 'grid5', component: FifthGirdLayout },
    { path: 'chart4', component: AreaChart },
    { path: 'news3', component: FlexBoxNews },
    { path: 'scroll-container', component: ScrollContainer },
    { path: 'griddle1', component: FirstGriddle },
    { path: 'griddle2', component: SecondGriddle },
    { path: 'largeGrid', component: LargeGrid },
    { path: 'UIGrid', component: UIGrid },
    { path: 'ChartIQ2', component: ChartIQ2 },
    { path: 'ChartIQ3', component: AjaxChart },


  ]
};

ReactDOM.render(
  <Router history={useRouterHistory(createHashHistory)({queryKey: false})} routes={routes} />,
  document.getElementById('app')
);
