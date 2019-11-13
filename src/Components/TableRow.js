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

const StyledTableCheckbox = styled.td`
  padding: 8px 10px;
  border: none;
  text-align: center;
`

const TableRow = (props) => {
  return(
    <StyledTableRow>
      <StyledTableCheckbox><input type="checkbox" onClick={ () => props.checkboxClick(props.id) } checked={ props.checked } /></StyledTableCheckbox>
      <StyledTableData>{ props.id }</StyledTableData>
      <StyledTableData>{ props.status }</StyledTableData>
      <StyledTableData>{ props.last_flavor_sensor_result }</StyledTableData>
      <StyledTableData>{ props.error_messages }</StyledTableData>
    </StyledTableRow>
  )
}

export default TableRow;