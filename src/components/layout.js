import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import 'font-awesome/css/font-awesome.min.css';
import './layout.css'

const Layout = ({ children }) => (
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
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Page>
          {children}
        </Page>
      </>
    )}
  />
)

const Page = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
