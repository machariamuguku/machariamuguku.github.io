import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { useMediaQuery } from "./customHooks/useMediaQuery";

import { ArtDirectedImage } from "./ArtDirectedImage";
import { Header } from "./header";
import { HomeAboutContact } from "./homeAboutContact";
import { SocialLinks } from "./socialLinks";
import { CaretDown } from "./caretDown";
import { Projects } from "./projects";
import { Articles } from "./articles";
import { Footer } from "./footer";

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
  height: 90vh;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 48rem) {
    height: 65vh;
  }
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CaretDownStl = styled.div`
  position: absolute;
  bottom: 1rem;
  @media (max-width: 48rem) {
    bottom: 0;
  }
`;
const SocialLinksStl = styled.div`
  position: absolute;
  right: 10rem;
  @media (max-width: 48rem) {
    margin-top: 3rem;
    position: relative;
    right: auto;
  }
`;
const ProjectsStl = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;
const ArticlesStl = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const LandingPage = () => {
  // check if media is mobile
  const isMobileOrTablet = useMediaQuery("(max-width: 48rem)");

  // query for side data
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
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
    <VerticalContainer>
      <Header siteTitle={siteMetadata.title} />

      <ArtDirectedImage BgSize={isMobileOrTablet ? "cover" : "contain"}>
        <Container>
          <MainContent>
            <HomeAboutContact />
          </MainContent>

          <SocialLinksStl>
            <SocialLinks />
          </SocialLinksStl>

          <CaretDownStl>
            <CaretDown />
          </CaretDownStl>
        </Container>
      </ArtDirectedImage>

      <ProjectsStl>
        <Projects />
      </ProjectsStl>

      <ArticlesStl>
        <Articles />
      </ArticlesStl>

      <Footer siteOwner={siteMetadata.owner} />
    </VerticalContainer>
  );
};
