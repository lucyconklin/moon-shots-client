import React, { Component } from 'react';
import styled from 'styled-components';

const Header1 = styled.h1`
  color: #7AE9B7;
  font-size: 48px;
  text-align: center;
`

const Section = styled.section`
  padding: 20px;
  margin: 0px;
`

class Header extends Component {
  render() {
    return (
      <Section>
        <Header1>Moon Shots</Header1>
      </Section>
    )}
}

export default Header;