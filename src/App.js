import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Main from './Main/Main';

const Site = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Site>
        <Helmet
          title="Moon Shots"
          meta={[
            { name: 'description', content: 'Lucy Conklin\'s moon shot tech challenge' },
            { name: 'keywords', content: 'moon shot, lucy conklin' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1'}
          ]}
        />
        <Main />
      </Site>
    );
  }
}

export default App;
