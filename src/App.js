import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const Site = styled.div`
  background-color: #1C1D23;
  min-height: 1000px;
  margin: 0;
  padding: 0;
  color: #ACE464;
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
        <Header />
        <Main />
        <Footer />
      </Site>
    );
  }
}

export default App;
