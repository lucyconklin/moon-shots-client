import React, { Component } from 'react';
import Table from './Table';
import TableRow from './TableRow';
import TableHead from './TableHead';
import SatelliteTable from './SatelliteTable';
import SatelliteTableRow from './SatelliteTableRow';
import SatelliteTableHead from './SatelliteTableHead';
import styled from 'styled-components';

const Header1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
`

const Section = styled.section`
  padding: 20px;
  margin: 0px;
  width: 80%;
  margin: 20px auto;
`

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barrels: [],
      satellites: [],
      searchInput: '',
      sortColumn: 'id',
      sortOrder: 'desc',
    };
  }
    
  componentDidMount() {
    var sort_order = this.state.sortOrder
    var attribute = this.state.sortColumn
    var search_term = this.state.searchInput
    
    var url = 'http://localhost:3000/graphql'
    var query = "{ barrels(order: " + sort_order + ", attribute: " + attribute +" ) {id, status, last_flavor_sensor_result, error_messages} satellites {id, telemetry_timestamp} }"
    
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ query: query }),
    })
      .then(response => response.json())
      .then(data => this.setState(
        { barrels: data["data"]["barrels"],
          satellites: data["data"]["satellites"]
        }))
      .then(console.log("barrels: ", this.state.barrels))
      .then(console.log("satellites: ", this.state.satellites))
  };
  
  eachBarrel(barrel){
    return <TableRow id = {barrel.id}
                     status={ barrel.status } 
                     last_flavor_sensor_result={ barrel.last_flavor_sensor_result} 
                     error_messages={ barrel.error_messages} />
  }
  
  eachSatellite(satellite){
    return <SatelliteTableRow id = {satellite.id} 
                     telemetry_timestamp = {satellite.telemetry_timestamp} />
  }
  
  updateInputValue(evt) {
    this.setState({
      searchInput: evt.target.value
    });
    console.log("searchInput: ", this.state.searchInput)
  }
  
  updateSortColumn(attribute) {
    this.setState({
      sortColumn: attribute
    });
    console.log("sortColumn: ", this.state.sortColumn)
  }
        
  render() {
    return (
      <Section>
        <input value={this.state.searchInput} onChange={evt => this.updateInputValue(evt)}/>
        <button onClick={ evt => this.updateSortColumn("status") }>Sort by status</button>
        <button onClick={ evt => this.updateSortColumn("time_since_last_update") }>Sort by time since last update</button>
        <button onClick={ evt => this.updateSortColumn("error_messages") }>Sort by error_state</button>
        <TableHead headers = {["Id", "Status", "Last Flavor Sensor Result", "Errors"]}/>
        <Table rows = { this.state.barrels.map(this.eachBarrel) } />
        <SatelliteTableHead headers = {["Id", "Telemetry Timestamp", "Trigger Deorbit Burn", "Detonate"]} />
        <SatelliteTable rows = { this.state.satellites.map(this.eachSatellite) } />
      </Section>
    );
  }
}

export default Main;