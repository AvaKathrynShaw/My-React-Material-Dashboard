/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

function addProducts(quantity) {
  const startId = products.length;
  const startDate = new Date(2015, 0, 1);
  const endDate = new Date();
  for (let i = 0; i < quantity; i++) {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3,
      price: Math.floor((Math.random() * 100) + 1),
      satisfaction: Math.floor(Math.random() * 6),
      inStockDate: date
    });
  }
}

addProducts(100);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];

export default class AllFilters extends React.Component {
  render() {
    return (
      <BootstrapTable ref='table' data={ products } exportCSV={ true }>
        <TableHeaderColumn
         dataField='id'
         width='150'
         dataAlign='center'
          isKey={ true }>
          Product ID
          <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>clear filters</a>
        </TableHeaderColumn>
        <TableHeaderColumn
        ref='name1'
        dataField='name'
        headerAlign='left'
        dataAlign='center'
        width='170'
        filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Product Name</TableHeaderColumn>

        <TableHeaderColumn ref='name2'
        dataField='name'
        headerAlign='left'
        dataAlign='center'
        width='200'
        filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Product Name</TableHeaderColumn>

        <TableHeaderColumn
        ref='quality'
        dataField='quality'
        headerAlign='left'
        dataAlign='center'
        width='200'
        filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Product Quality</TableHeaderColumn>

        <TableHeaderColumn
         ref='price'
         dataField='price'
          headerAlign='left'
           dataAlign='center'
           width='200'
            filter={ { type: 'NumberFilter', delay: 1000 } }>Product Price</TableHeaderColumn>

        <TableHeaderColumn
         ref='satisfaction'
        dataField='satisfaction'
        headerAlign='left'
         dataAlign='center'
         width='200'
        filter={ { type: 'NumberFilter', options: satisfaction } }>Buyer Satisfaction</TableHeaderColumn>

        <TableHeaderColumn
         ref='inStockDate'
        dataField='inStockDate'
        headerAlign='left'
        dataAlign='center'
        filter={ { type: 'DateFilter' } } dataFormat={ dateFormatter }>In Stock From</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  handlerClickCleanFiltered() {
    this.refs.name1.cleanFiltered();
    this.refs.name2.cleanFiltered();
    this.refs.quality.cleanFiltered();
    this.refs.price.cleanFiltered();
    this.refs.satisfaction.cleanFiltered();
    this.refs.inStockDate.cleanFiltered();
  }
}
