import React from "react";
import styled from "styled-components";

// custom hook
import { useMediaQuery } from "./customHooks/useMediaQuery";

// components
import { SEO } from "./seo";
import { ArtDirectedImage } from "./ArtDirectedImage";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  color: #d9d7e0;
  display: flex;
  flex-direction: column;
  @media (max-width: 48rem) {
    align-items: center;
    justify-content: center;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  letter-spacing: -0.015em;
  margin: 0;
`;
const Content = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 48rem) {
    font-size: 11pt;
  }
`;
const Link = styled.a`
  color: #d9d7e0;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
`;

export function FourOhFourLayout() {
  // check if media is mobile
  const isMobileOrTablet = useMediaQuery("(max-width: 48rem)");

  return (
    <VerticalContainer>
      <SEO title="404" />
      <ArtDirectedImage BgSize={isMobileOrTablet ? "cover" : "contain"}>
        <Container>
          <Item>
            <Header>Page not found</Header>
            <Content>
              <span>You just hit a route that doesn&#39;t exist. </span>
              <span>The sadness </span>
              <span role="img" aria-label="sad face emoji">
                &nbsp;😞.
              </span>
            </Content>
            <Link href="/">
              <p>Go Back</p>
            </Link>
          </Item>
        </Container>
      </ArtDirectedImage>
    </VerticalContainer>
  );
}
