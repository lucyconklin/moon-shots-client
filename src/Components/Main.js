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

const CheckedInformation = styled.section`
  padding: 20px;
  margin: 0px;
  width: 80%;
  margin: 20px auto;
  border: 2px solid #47B9DF;
`

const Input = styled.input`
  font-size: 16px;
  background: #282828;
  color: #F174A8;
  padding: 8px 11px;
  border: 2px solid #C782F5;
  border-radius: 2px;
  margin: 0 5px;
  font-family: 'IBM Plex Mono', monospace;
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

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barrels: [],
      filteredBarrels: [],
      satellites: [],
      searchInput: '',
      sortColumn: 'id',
      sortOrder: 'desc',
      checkedBarrels: {}
    };
    this.updateSortColumn = this.updateSortColumn.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
  }
  
  fetchData() {
    var sort_order = this.state.sortOrder
    var attribute = this.state.sortColumn
    
    var url = 'http://localhost:3001/graphql'
    var query = "{ barrels(order: " + sort_order + ", attribute: " + attribute + " ) {id, status, last_flavor_sensor_result, error_messages} satellites {id, telemetry_timestamp} }"
    
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ query: query }),
    })
    .then(response => response.json())
    .then(data => this.setState(
      { barrels: data["data"]["barrels"],
        filteredBarrels: data["data"]["barrels"],
        satellites: data["data"]["satellites"]
      }
    ))
  }

  componentWillMount() {
    this.fetchData()
  };
  
  eachBarrel = (barrel) => {
    return <TableRow id = {barrel.id}
                     status={ barrel.status }
                     last_flavor_sensor_result={ barrel.last_flavor_sensor_result}
                     error_messages={ barrel.error_messages}
                     key={barrel.id}
                     checkboxClick={ this.updateCheckedBarrels }
                     checked={ this.state.checkedBarrels[barrel.id] }/>
  }
  
  updateCheckedBarrels = (id) => {
    let selectedBarrels = {...this.state.checkedBarrels}
    // this.state.checkedBarrels[id.toString()] = 
    if (selectedBarrels[id.toString()]) {
      selectedBarrels[id.toString()] = false
    } else {
      selectedBarrels[id.toString()] = true
    }
    
    this.setState({ checkedBarrels: selectedBarrels })
  }
  
  eachSatellite(satellite){
    return <SatelliteTableRow id = {satellite.id} 
                     telemetry_timestamp = {satellite.telemetry_timestamp}
                     key={satellite.id}/>
  }
  
  updateInputValue(evt) {
    this.setState({
      searchInput: evt.target.value
    });
    let filteredBarrels = this.state.barrels.filter( (barrel) => { 
      let searchFields = barrel.last_flavor_sensor_result + barrel.error_messages[0] + barrel.status
      let isMatch = searchFields.toUpperCase().indexOf(evt.target.value.toUpperCase())
      return isMatch >= 0 })
      
    this.setState({ filteredBarrels: filteredBarrels })
  }
  
  updateSortColumn(attribute) {
    this.setState({
      sortColumn: attribute
    });
    this.fetchData()
  }
        
  render() {
    return (
      <Section>
      <CheckedInformation> You have checked { Object.entries(this.state.checkedBarrels).filter( ([key, value]) => value ).length } barrels.</CheckedInformation>
      <Input value={ this.state.searchInput } onChange={ evt => this.updateInputValue(evt) }/>
        <Button onClick={ evt => this.updateSortColumn("status") }>Sort by status</Button>
        <Button onClick={ evt => this.updateSortColumn("last_updated_at") }>Sort by time since last update</Button>
        <Button onClick={ evt => this.updateSortColumn("error_messages") }>Sort by error_state</Button>
        <TableHead headers = {["Id", "Status", "Last Flavor Sensor Result", "Errors"]}/>
        <Table rows = { this.state.filteredBarrels.map(this.eachBarrel) } />
        <SatelliteTableHead headers = {["Id", "Telemetry Timestamp", "Trigger Deorbit Burn", "Detonate"]} />
        <SatelliteTable rows = { this.state.satellites.map(this.eachSatellite) } />
      </Section>
    );
  }
}

export default Main;