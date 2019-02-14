import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SideDrawer = props => {
  let drawerClass;
  if (props.show) {
    drawerClass = 'open';
  }
  return (
    <SideDrawerNav className={drawerClass}>
      <ul>
        <li><Page to="/">HOME</Page></li>
        <li><Page to="/gallery">GALLERY</Page></li>
        <li><Page to="/music">MUSIC</Page></li>
        <li><Page to="/resume">RESUME</Page></li>
        <li><Page to="/contact">CONTACT</Page></li>
      </ul>
    </SideDrawerNav>
  )
}

export default SideDrawer;

const SideDrawerNav = styled.nav`
  height: 100%;
  background: #5330EB;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  li {
    margin: 0.5rem 0;
  }

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Page = styled(Link)`
  color: #131313;
  text-decoration: none;
  &:active {
    color: #131313;
  }
  &:visited {
    color: #131313;
  }
  &:hover {
    color: #FFFFFF;
  }
`;