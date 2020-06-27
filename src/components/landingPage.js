import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSpring, config } from "react-spring";
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
  // refs for different sections
  const projectsRef = useRef(null);
  const articlesRef = useRef(null);

  // react spring scroll animation
  const [, setAnimation] = useSpring(() => ({
    immediate: false,
    config: config.slow,
    y: 0
  }));

  // override the scroll animation when user scrolls themselves
  let isStopped = false;
  const onWheel = () => {
    isStopped = true;
    window.removeEventListener("wheel", onWheel);
  };

  // scroll to element
  const scrollToPosition = (ref) => {
    // add event listener for incase user scrolls themselves
    window.addEventListener("wheel", onWheel);

    setAnimation({
      y: window.scrollY + ref.current.getBoundingClientRect().top,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false;
        window.removeEventListener("wheel", onWheel);
      },
      onFrame: (props) => {
        if (!isStopped) {
          window.scroll(0, props.y);
        }
      }
    });
  };

  // scroll to top
  const scrollToTop = () => {
    // add event listener for incase user scrolls themselves
    window.addEventListener("wheel", onWheel);

    setAnimation({
      y: 0,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false;
        window.removeEventListener("wheel", onWheel);
      },
      onFrame: (props) => {
        if (!isStopped) {
          window.scroll(0, props.y);
        }
      }
    });
  };

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
      <Header
        siteTitle={siteMetadata.title}
        scrollToTop={scrollToTop}
        scrollToPosition={scrollToPosition}
        projectsRef={projectsRef}
        articlesRef={articlesRef}
      />
      <ArtDirectedImage BgSize={isMobileOrTablet ? "cover" : "contain"}>
        <Container>
          <MainContent>
            <HomeAboutContact />
          </MainContent>

          <SocialLinksStl>
            <SocialLinks />
          </SocialLinksStl>

          <CaretDownStl>
            <CaretDown
              reference={projectsRef}
              scrollToPosition={scrollToPosition}
            />
          </CaretDownStl>
        </Container>
      </ArtDirectedImage>

      <ProjectsStl ref={projectsRef}>
        <Projects />
      </ProjectsStl>

      <ArticlesStl ref={articlesRef}>
        <Articles />
      </ArticlesStl>

      <Footer siteOwner={siteMetadata.owner} />
    </VerticalContainer>
  );
};
