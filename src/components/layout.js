/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

//  Todo: implement react error boundary
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import ArtDirectedFullBackground from "./ArtDirectedFullBackground";
import Header from "./header";
import Footer from "./footer";

const Children = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          owner
        }
      }
    }
  `);

  return (
    <>
      <ArtDirectedFullBackground>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Children>{children}</Children>
      </ArtDirectedFullBackground>
      <Footer siteOwner={data.site.siteMetadata.owner} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
