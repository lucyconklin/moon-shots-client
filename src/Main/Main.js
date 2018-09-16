import React, { Component } from 'react';
import Table from '../Table/Table';
import styled from 'styled-components';

// const TableRow = ({row}) => (
//   <tr>
//     <td key={row.status}>{row.status}</td>
//     <td key={row.i}>{row.last_flavor_sensor_result}</td>
//   </tr>
// )
// 
// const Table = ({data}) => (
//   <table>
//     { data.map((row,i) => {
//       <TableRow row={row} i={i} />
//     })}
//   </table>
// )

const Header1 = styled.h1`
  color: #7AE9B7;
  font-size: 48px;
`

const Section = styled.section`
  padding: 20px;
  margin: 0px;
`

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barrels: [],
      searchInput: '',
      sortColumn: '',
      sortOrder: '',
    };
  }
    
  componentWillMount() {
    var sort_order = 'desc'
    var attribute = 'id'
    var search_term = this.state.searchInput
    
    var url = 'http://localhost:3000/graphql'
    var query = '{ barrels(order: desc, attribute: status) {status, last_flavor_sensor_result, error_messages} }'
    
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ query: query }),
    })
      .then(response => response.json())
      .then(data => this.setState({ barrels: data["data"]["barrels"]}))
      .then(data => console.log("barrels: ", this.state.barrels))
  };
  
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
        <Header1>Moon Shots</Header1>
        <input value={this.state.searchInput} onChange={evt => this.updateInputValue(evt)}/>
        <table class="sortTable">
          <tbody>
            <tr>
              <td>
                <button onClick={ evt => this.updateSortColumn("status") }>Sort by status</button>
              </td>
              <td>
                <button onClick={ evt => this.updateSortColumn("time_since_last_update") }>Sort by time since last update</button>
              </td>
              <td>
                <button onClick={ evt => this.updateSortColumn("error_state") }>Sort by error_state</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="tableHeader">
          <tbody>
            <tr>
              <td>Status</td>
              <td>Time Since Last Update</td>
              <td>{"Error State"}</td>
            </tr>
          </tbody>
        </table>
        <Table data={this.state.barrels} />
      </Section>
    );
  }
}

export default Main;