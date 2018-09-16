import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  text-align: right;
  color: #7AE9B7;
  &:nth-child(even) { background-color: rgba(255,255,255,0.05); }
`

const StyledTableData = styled.td`
  padding: 8px 10px;
  border: none;
`

class TableRow extends Component {

  constructor(props) {
    super(props);
  }
  
  
  render() {
    return(
      <StyledTableRow>
        <StyledTableData>{ this.props.id }</StyledTableData>
        <StyledTableData>{ this.props.status }</StyledTableData>
        <StyledTableData>{ this.props.last_flavor_sensor_result }</StyledTableData>
        <StyledTableData>{ this.props.error_messages }</StyledTableData>
      </StyledTableRow>
    )
  }
}

export default TableRow;