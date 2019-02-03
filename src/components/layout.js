import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';
import './layout.css';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Site>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} className="toolbar" />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Page>
          {this.props.children}
        </Page>
      </Site>
    )
  }
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Layout>{children}</Layout>
    )}
  />
)

const Site = styled.div`
  display: grid;
  grid-template-rows: 72px 1fr;
  grid-template-areas:
    "toolbar"
    "page";

  .toolbar {
    position: sticky;
    z-index: 50;
    grid-area: toolbar;
  }
`;

const Page = styled.div`
  grid-area: page;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
