import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '5px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const items = [
  {
    symbol: 'AXP' ,
    description: 'AMERICAN EXPRESS' ,
    mostRecent:'64.3',
    change:'-1.2' ,
    percentChange:'2.34%' ,
    bid:'64.08x2' ,
    ask:'64.98x2' ,
    volume:'5,620,254' ,
    mostRecentTime: '16:39:00',
    open:'65.22' ,
    high:'65.32' ,
    low: '64.05',
    previous:'65.90' ,
    marketCap:'60,957.50' ,
    priceToBook: '2.94',
    peRatio:'12.80' ,
    avgVolume:'3,520,255' ,
    shortInterest: '19,240,663.00',
  },
  {
    symbol: 'BA' ,
    description: 'BOEING' ,
    mostRecent: '128.8',
    change:'2.34' ,
    percentChange:'1.38%' ,
    bid:'128.80x1' ,
    ask:'129.10x4' ,
    volume:'4,547,587' ,
    mostRecentTime: '17:17:04',
    open:'129.22' ,
    high:'130.02' ,
    low: '128.26',
    previous:'130.12' ,
    marketCap:'81,436.99' ,
    priceToBook: '139.21',
    peRatio:'17.08' ,
    avgVolume:'2,905,393' ,
    shortInterest: '28,729,269.00',
  },
  {
    symbol: 'BP' ,
    description: 'BP PLC' ,
    mostRecent: '33.90',
    change:'-1.13' ,
    percentChange:'-3.26%' ,
    bid:'33.50x4' ,
    ask:'33.58x3' ,
    volume:'9,230,000' ,
    mostRecentTime: '17:16:51',
    open:'33.85' ,
    high:'33.97' ,
    low: '33.36',
    previous:'34.63' ,
    marketCap:'108,375.49' ,
    priceToBook: '1.17',
    peRatio:'-0.95' ,
    avgVolume:'5,728,456' ,
    shortInterest: '16,374,657.00',
  },
  {
    symbol: 'CAT' ,
    description: 'CATERPILLAR INC' ,
    mostRecent: '80.23',
    change:'-1.69' ,
    percentChange:'-2.06%' ,
    bid:'80.28x5' ,
    ask:'80.50x3' ,
    volume:'4,735,234' ,
    mostRecentTime: '17:25:43',
    open:'81.10' ,
    high:'81.26' ,
    low: '79.93',
    previous:'81.92' ,
    marketCap:'47,860.22' ,
    priceToBook: '3.14',
    peRatio:'51.43' ,
    avgVolume:'3,366.088' ,
    shortInterest: '41,400,904.00',
  },
  {
    symbol: 'CSCO' ,
    description: 'CISCO SYSTEMS' ,
    mostRecent: '128.8',
    change:'-.38' ,
    percentChange:'-1.21%',
    bid:'31.11x6' ,
    ask:'31.33x5' ,
    volume:'23,578,362' ,
    mostRecentTime: '12:45:10',
    open:'31.26' ,
    high:'31.35' ,
    low: '30.90',
    previous:'31.44' ,
    marketCap:'155,298.90' ,
    priceToBook: '2.49',
    peRatio:'14.58' ,
    avgVolume:'22,690,880' ,
    shortInterest: '47,518,830.00',
  },
  {
    symbol: 'CVX' ,
    description: 'CHEVERON CORP' ,
    mostRecent: '99.43',
    change:'-2.82' ,
    percentChange:'-2.76%',
    bid:'99.50X3' ,
    ask:'99.65x4' ,
    volume:'9,289,090' ,
    mostRecentTime: '17:17:04',
    open:'101.65' ,
    high:'101.65' ,
    low: '97.17',
    previous:'102.25' ,
    marketCap:'192,896.72' ,
    priceToBook: '1.31',
    peRatio:'-294.95' ,
    avgVolume:'5,861,942' ,
    shortInterest: '31,256,378.00',
  },
  {
    symbol: 'DD' ,
    description: 'DUPONT E IDE' ,
    mostRecent: '67.09',
    change:'-' ,
    percentChange:'-2.76%',
    bid:'99.50X3' ,
    ask:'99.65x4' ,
    volume:'9,289,090' ,
    mostRecentTime: '17:17:04',
    open:'101.65' ,
    high:'101.65' ,
    low: '97.17',
    previous:'102.25' ,
    marketCap:'192,896.72' ,
    priceToBook: '1.31',
    peRatio:'-294.95' ,
    avgVolume:'5,861,942' ,
    shortInterest: '31,256,378.00',
  },
];



const ExampleTableRow = (item) => (
  <TableRow key={item.symbol}>
    <TableRowColumn>{item.symbol}</TableRowColumn>
    <TableRowColumn>{item.description}</TableRowColumn>
    <TableRowColumn>{item.mostRecent}</TableRowColumn>
    <TableRowColumn>{item.change}</TableRowColumn>
    <TableRowColumn>{item.bid}</TableRowColumn>
    <TableRowColumn>{item.ask}</TableRowColumn>
    <TableRowColumn>{item.volume}</TableRowColumn>
    <TableRowColumn>{item.mostRecentTime}</TableRowColumn>
    <TableRowColumn>{item.open}</TableRowColumn>
    <TableRowColumn>{item.high}</TableRowColumn>
    <TableRowColumn>{item.low}</TableRowColumn>
    <TableRowColumn>{item.previous}</TableRowColumn>
    <TableRowColumn>{item.marketCap}</TableRowColumn>
    <TableRowColumn>{item.peRatio}</TableRowColumn>
    <TableRowColumn>{item.avgVolume}</TableRowColumn>
    <TableRowColumn>{item.shortInterest}</TableRowColumn>
  </TableRow>
)

const ExampleTable = () => {
  const tableRows = items.map(item => ExampleTableRow(item));
  const settings = {
fixedHeader: true,
fixedFooter: true,
stripedRows: false,
showRowHover: true,
showCheckboxes: false,
height: '300px',

  }
  return (
    <div>
      <Table
      fixedHeader= {settings.fixedHeader}
      fixedFooter= {settings.fixedFooter}
      stripedRows= {settings.stripedRows}
      showRowHover= {settings.showRowHover}
      showCheckboxes={settings.showCheckboxes}
      height={settings.height}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn >Symbol</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Most Recent</TableHeaderColumn>
            <TableRowColumn>Change</TableRowColumn>
            <TableRowColumn>% Change</TableRowColumn>
            <TableRowColumn>Bid</TableRowColumn>
            <TableRowColumn>Ask</TableRowColumn>
            <TableRowColumn>Volume</TableRowColumn>
            <TableRowColumn>Most Recent Time</TableRowColumn>
            <TableRowColumn>Open</TableRowColumn>
            <TableRowColumn>High</TableRowColumn>
            <TableRowColumn>Low</TableRowColumn>
            <TableRowColumn>Previous</TableRowColumn>
            <TableRowColumn>Market Cap</TableRowColumn>
            <TableRowColumn>Price To Book</TableRowColumn>
            <TableRowColumn>P/E</TableRowColumn>
            <TableRowColumn>Avg Volume</TableRowColumn>
            <TableRowColumn>Short Interest</TableRowColumn>

          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </div>
  );
}

export default ExampleTable;
