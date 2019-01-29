import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo to="/">OSCAR<br />ARRIAGA</Logo>
    <a class="toggle close" href="#">×</a>
    <a class="toggle open" href="#nav-bar">open</a>
    <NavBar id="nav-bar">
      <Page to="/">HOME</Page>
      <Page to="/gallery">GALLERY</Page>
      <Page to="/music">MUSIC</Page>
      <Page to="/resume">RESUME</Page>
      <Page to="/contact">CONTACT</Page>
    </NavBar>
    <SocialMedia>
      <a href="https://twitter.com/IlluminatiRey"><i className="fa fa-twitter"></i></a>
      <a href="https://www.instagram.com/illuminatirey/"><i className="fa fa-instagram"></i></a>
    </SocialMedia>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  background-color: #131313;
  height: 72px;
  line-height: 72px;
  font-size: 18px;
  display: grid;
  grid-template-columns: 1fr;
  a {
    color: #5330EB;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto 1fr auto;
    .toggle {
      display: none;
    }
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
  margin: 10px 10px 10px 20px;
  :hover {
    color: #FFFFFF;
  }
`;

const NavBar = styled.nav`
  margin: auto;
  @media only screen and (max-width: 599px) {
    transition: transform .3s ease-in-out;
    top: 0;
    bottom: 0;   
    position: fixed;
    width: 300px;
    right: -340px;
    :target {
      transform: translateX(-340px);
    }
    .close {
      text-align: right;
      display: block;
      text-decoration: none;
      font-size: 3em;
      position: relative;
      top: -30px;
    }
    .open {
      text-align: left;
    }
  }
`;

const Page = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0 7px 0 7px;
  display: inline-block;
  :active {
    color: #5330EB;
  }
  :visited {
    color: #5330EB;
  }
  :hover {
    color: #FFFFFF;
    background-color: #5330EB;
  }
`;

const SocialMedia = styled.div`
  margin-right: 20px;
  font-size: 22px;
  i {
    padding: 0 10px 0 10px;
  }
  i:hover {
    color: #FFFFFF;
    cursor: pointer;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
