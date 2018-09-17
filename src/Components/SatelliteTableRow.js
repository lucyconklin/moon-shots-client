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

const Button = styled.button`
  font-size: 14px;
  padding: 8px 11px;
  background-color: #47B9DF;
  color: #282828;
  margin: 0 5px;
  border: 2px solid #C782F5;
  border-radius: 2px;
  font-family: 'IBM Plex Mono', monospace;
`

class SatelliteTableRow extends Component {

  constructor(props) {
    super(props);
    this.state = { detonated: false,
                   deorbit_burn: false };
  }
  
  handleDeorbitBurn(evt){
    this.setState({deorbit_burn: true})
    console.log("Uh Oh")
  }
  
  handleDetonation(evt){
    this.setState({detonated: true})
    console.log("Boom!")
  }
  
  
  render() {
    return(
      <StyledTableRow>
        <StyledTableData>{ this.props.id }</StyledTableData>
        <StyledTableData>{ this.props.telemetry_timestamp }</StyledTableData>
        <StyledTableData><Button onClick={ evt => this.handleDeorbitBurn(evt) }>Trigger Deorbit Burn</Button></StyledTableData>
        <StyledTableData><Button onClick={ evt => this.handleDetonation(evt) }>Detonate</Button></StyledTableData>
      </StyledTableRow>
    )
  }
}

export default SatelliteTableRow;