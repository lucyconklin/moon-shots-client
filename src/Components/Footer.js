import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  margin: 0px;
`

const Paragraph = styled.p`
  font-size: 14px;
  color: #C782F5;
  text-align: center;
`

class Footer extends Component {
  render() {
    return (
      <Section>
        <Paragraph>Made by Lucy</Paragraph>
      </Section>
    )}
}

export default Footer;