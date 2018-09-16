import React, { Component } from 'react';
import styled from 'styled-components';

const TableHeadContent = styled.section`
  background-color: rgba(255,255,255,0.1);
  padding: 10px;
  margin-top: 40px;
`

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  cellpadding: none; 
  cellspacing: none;
  border: none;
`

const StyledTableHead = styled.thead`
  color: #C782F5;
  text-align: right;
  width: 100%;
  text-transform: uppercase;
`

class TableHead extends Component {

  constructor(props) {
    super(props);
  }
  
  eachHeader(header){
    return <th>{ header }</th>
  }
  
  render() {
    return(
      <TableHeadContent>
        <StyledTable>
          <StyledTableHead>
            { this.props.headers.map(this.eachHeader) }
          </StyledTableHead>
        </StyledTable>
      </TableHeadContent>
    )
  }
}

export default TableHead;