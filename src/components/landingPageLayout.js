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
const GuardianContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 95vw;
  height: 65vh;
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 52vh;
  }
`;
const Container = styled.div`
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 48rem) {
    flex-direction: column;
    height: fit-content;
    width: inherit;
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
      <GuardianContainer>
        <Container>
          <HomeAboutContact />
          <SocialLinksStl>
            <SocialLinks />
          </SocialLinksStl>
        </Container>
      </GuardianContainer>
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
