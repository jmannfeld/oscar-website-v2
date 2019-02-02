import React from 'react';
import styled from 'styled-components';

const DrawerToggleButton = props => (
  <HamburgerButton onClick={props.click}>
    <Line></Line>
    <Line></Line>
    <Line></Line>
  </HamburgerButton>
);

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;

export default DrawerToggleButton;