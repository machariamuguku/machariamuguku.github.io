import React from "react";
import styled from "styled-components";

import HomeAboutContact from "./homeAboutContact";
import { SocialLinks } from "./socialLinks";
import { CaretDown } from "./caretDown";
import { Projects } from "./projects";
import { Articles } from "./articles";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 48rem) {
    margin-top: 2rem;
  }
`;
const SocialLinksStl = styled.div`
  margin-top: 2rem;
  position: absolute;
  right: 10rem;
  @media (max-width: 48rem) {
    margin-top: 2rem;
    position: relative;
    right: auto;
  }
`;
const ProjectsStl = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;
const ArticlesStl = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const LandingPageLayout = () => {
  return (
    <VerticalContainer>
      <Container>
        <HomeAboutContact />
        <SocialLinksStl>
          <SocialLinks />
        </SocialLinksStl>
      </Container>
      <CaretDown />
      <ProjectsStl>
        <Projects />
      </ProjectsStl>
      <ArticlesStl>
        <Articles />
      </ArticlesStl>
    </VerticalContainer>
  );
};
