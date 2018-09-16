import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      sortColumn: '',
      sortOrder: '',
      data: {
      }
    };
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

  componentDidMount() {
    var sort_order = 'desc'
    var attribute = 'id'
    var search_term = this.state.searchInput
    var url = 'http://localhost:3000/graphql'
    var query = JSON.stringify('{ barrels(order: desc, attribute: status) {id, last_flavor_sensor_result} }');
    console.log(query)
    
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: { query: query },
    })
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .then(data => console.log(this.state.data))
  };
      
  render() {
    return (
      <div className="Main">
        <h1>Moon Shots</h1>
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
        <table class="tableHeader">
          <tbody>
            <tr>
              <td>Status</td>
              <td>Time Since Last Update</td>
              <td>{"Error State"}</td>
            </tr>
          </tbody>
        </table>
        <table class="tableContent">
          <tbody>
            { this.state.data.toString() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;