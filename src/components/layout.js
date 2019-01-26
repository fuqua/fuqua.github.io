import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

import Header from './header'
import Nav from './Nav'

const Content = styled.div`
  ${tw`px-32 py-8 font-mono`};
`

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'a blog by aaron fuqua. i develop and design applications. i like javascript, maintainable code, radiohead, photoshop, whisky, the dallas cowboys and my wife (not in that order).' },
            { name: 'keywords', content: 'aaron fuqua, javascript, react, developer, dallas, application' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
