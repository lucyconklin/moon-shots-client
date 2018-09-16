import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  
  // const barrelTableRows = this.state.data.map((barrel, i) => <tr><td>{barrel.id}</td></tr>)
  
  componentDidMount() {
    fetch('localhost:3000/graphql')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  
  render() {
    return (
      <div className="Main">
        <h1>Moon Shots</h1>
        <table>
          { this.state.data }
        </table>
      </div>
    );
  }
}

export default Main;