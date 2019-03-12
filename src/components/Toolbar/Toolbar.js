import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
  <ToolbarContainer>
    <Navigation>
      <ToolbarToggle>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </ToolbarToggle>
      <Logo to="/">OSCAR<br />ARRIAGA</Logo>
      <MainNav>
        <ul>
          <li><Page to="/gallery">GALLERY</Page></li>
          <li><Page to="/music">MUSIC</Page></li>
          <li><Page to="/resume">RESUME</Page></li>
          <li><Page to="/contact">CONTACT</Page></li>
        </ul>
      </MainNav>
      <SocialMedia>
        <a href="https://twitter.com/IlluminatiRey" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/illuminatirey/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
      </SocialMedia>
    </Navigation>
  </ToolbarContainer>
);

export default Toolbar;

const ToolbarContainer = styled.header`
  width: 100vw;
  position: fixed;
  background-color: #131313;
  height: 72px;
  line-height: 72px;
  top: 0;
  left: 0;
  z-index: 50;
  a {
    color: #5330EB;
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1.1rem;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const ToolbarToggle = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  display: inline-block;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  line-height: 1;
  border: 3px solid #5330EB;
  padding: 5px;
  margin-left: 1rem;
  :hover {
    color: #FFFFFF;
  }
  @media (max-width: 768px) {
    margin-left: 3em;
  }
  @media (min-width: 769px) {
    margin-left: 0;
  }
`;

const MainNav = styled.div`
  margin: auto;
  ul {
    list-style: none;
    margin: auto;
    display: flex;
    align-items: center;
  }
  li {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Page = styled(Link)`
  margin: 0;
  padding: 0 0.5rem;
  display: inline-block;
  &:active {
    color: #5330EB;
  }
  &:visited {
    color: #5330EB;
  }
  &:hover {
    color: #FFFFFF;
    background-color: #5330EB;
  }
`;

const SocialMedia = styled.div`
  font-size: 22px;
  display: inline-block;
  i {
    padding: 0 0.5em 0 0.5em;
  }
  i:hover {
    color: #FFFFFF;
    cursor: pointer;
  }
  @media (max-width: 414px) {
    font-size: 18px;
  }
`;