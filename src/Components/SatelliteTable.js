import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  cellpadding: 0; 
  cellspacing: 0;
  border: none;
`

const TableBodyContent = styled.section`
  max-height:450px;
  overflow: scroll;
  border: 1px solid rgba(255,255,255,0.1);
`

class SatelliteTable extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <TableBodyContent>
        <StyledTable>
            { this.props.rows }
        </StyledTable>
      </TableBodyContent>
    )
  }
}

export default SatelliteTable;