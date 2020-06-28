import React, { useRef, useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSpring, config, useTransition, animated } from "react-spring";
import styled from "styled-components";

import BackUp from "../images/backUp.svg";

// context provider
import { MenuContext } from "./menuContext";

// custom hooks
import { useOnScroll } from "./customHooks/useOnScroll";
import { useMediaQuery } from "./customHooks/useMediaQuery";

import { ArtDirectedImage } from "./ArtDirectedImage";
import { Header } from "./header";
import { HomeAboutContact } from "./homeAboutContact";
import { NavigationCircles } from "./navigationCircles";
import { SocialLinks } from "./socialLinks";
import { CaretDown } from "./caretDown";
import { Projects } from "./projects";
import { Blog } from "./blog";
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
    height: 72vh;
  }
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
`;
const BlogStl = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;
const BackUpImg = styled.img`
  position: fixed;
  bottom: 2.5rem;
  right: 1.875rem;
  font-size: 1em;
  display: block;
  z-index: 2;
  text-align: center;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: whitesmoke;
  color: #000000;
  line-height: 2.5rem;
  &:hover {
    background: white;
    height: 2.688rem;
    width: 2.688rem;
  }
`;

export const HomeLayout = () => {
  // context consumer
  const { activeMenuAndComponent, dispatchActiveMenuAndComponent } = useContext(
    MenuContext
  );

  // refs for different sections
  const projectsRef = useRef(null);
  const blogRef = useRef(null);

  // extract complex extraction for static checking
  let projectsRefTop = projectsRef.current?.getBoundingClientRect().top,
    blogRefTop = blogRef.current?.getBoundingClientRect().top;

  useEffect(() => {
    // if scrolled to projectsRef position or beyond but not yet to blogRef
    if (
      projectsRef.current.getBoundingClientRect().top <= 100 &&
      !(blogRef.current.getBoundingClientRect().top <= 100)
    ) {
      dispatchActiveMenuAndComponent({
        type: "CHANGE_MENU",
        payload: "Projects"
      });
    }
    // scrolled to or past blogRef
    else if (blogRef.current.getBoundingClientRect().top <= 100) {
      dispatchActiveMenuAndComponent({
        type: "CHANGE_MENU",
        payload: "Blog"
      });
    } else {
      dispatchActiveMenuAndComponent({
        type: "CHANGE_MENU",
        payload: activeMenuAndComponent.Component
      });
    }
  }, [
    projectsRefTop,
    blogRefTop,
    dispatchActiveMenuAndComponent,
    activeMenuAndComponent.Component
  ]);

  // react spring scroll animation
  const [, setAnimation] = useSpring(() => ({
    immediate: false,
    config: config.stiff,
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
      y: window.scrollY + ref.current.getBoundingClientRect().top - 85,
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

  // track if scrolling downwards
  const isScrollValid = useOnScroll({
    minimumScroll: window.scrollY + projectsRefTop - 200,
    throttleTime: 250,
    delayTime: 250
  });

  const transitions = useTransition(isScrollValid, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

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
        blogRef={blogRef}
      />
      <ArtDirectedImage BgSize={isMobileOrTablet ? "cover" : "contain"}>
        <Container>
          <MainContent>
            <HomeAboutContact />
            <NavigationCircles />
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

      <BlogStl ref={blogRef}>
        <Blog />
      </BlogStl>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <BackUpImg
                src={BackUp}
                alt="go back up"
                onClick={() => scrollToTop()}
              />
            </animated.div>
          )
      )}

      <Footer siteOwner={siteMetadata.owner} />
    </VerticalContainer>
  );
};
