import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  
`

class Table extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      Object.keys(this.props.data).map((barrel) => {
      <p>{barrel.status}</p>
    }))
  }
}

export default Table;