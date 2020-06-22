import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ArtDirectedImage = ({ children, BgSize }) => {
  const { desktop, medium, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background_image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "1400x900.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "490x352.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 491px)`
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`
    }
  ];

  return (
    <StyledWrapper>
      <BackgroundImage
        style={{ backgroundSize: BgSize }}
        Tag="section"
        fluid={backgroundArtDirectionStack}
        backgroundColor="#000000"
        id="adfullscreenbg"
        role="img"
        aria-label="Macharia Muguku"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledWrapper>
  );
};
