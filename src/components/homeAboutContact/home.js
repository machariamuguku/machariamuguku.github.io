import React from "react";
import styled, { keyframes } from "styled-components";

// custom typeWriter hook
import { useTypeWriter } from "../customHooks/useTypeWriter";

// components
import { SEO } from "../seo";

const introductions = [
  "Macharia Muguku",
  "A Software Engineer",
  "A Full-Stack Developer",
  "A Minimalist"
];

const introductionSummary = ["ENGINEER", "DEVELOPER", "MINIMALIST"];

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18rem;
  @media (max-width: 48rem) {
    width: 15rem;
  }
`;
const LinkHeader = styled.span`
  font-size: 20pt;
  font-weight: bold;
  @media (max-width: 48rem) {
    font-size: 14pt;
  }
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.7rem;
  a {
    color: white;
  }
  @media (max-width: 48rem) {
    margin-left: 1.2rem;
  }
`;
const BlinkAnimation = keyframes`
  from,
  to {
    color: transparent;
  }
  50% {
    color: white;
  }
`;
const Introduction = styled.span`
  flex: 0 0 auto;
  align-self: flex-end;
  &:first-child {
    font-size: 20pt;
    font-weight: bold;
    margin-right: 0.4rem;
    @media (max-width: 48rem) {
      font-size: 15pt;
    }
  }
  &:nth-child(2) {
    font-size: 16pt;
    font-weight: lighter;
    font-style: italic;
    @media (max-width: 48rem) {
      font-size: 12pt;
    }
  }
  &:nth-child(3) {
    font-size: 17pt;
    font-weight: lighter;
    -webkit-animation: ${BlinkAnimation} 1s step-end infinite;
    -moz-animation: ${BlinkAnimation} 1s step-end infinite;
    -ms-animation: ${BlinkAnimation} 1s step-end infinite;
    -o-animation: ${BlinkAnimation} 1s step-end infinite;
    animation: ${BlinkAnimation} 1s step-end infinite;
    @media (max-width: 48rem) {
      font-size: 12pt;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Summary = styled.div`
  font-size: 10pt;
  font-weight: bolder;
  @media (max-width: 48rem) {
    font-size: 8pt;
    margin: 0;
  }
`;
const Dot = styled.span`
  font-size: 18pt;
`;

export function Home() {
  const introduction = useTypeWriter(introductions);
  return (
    <>
      <VerticalContainer>
        <SEO title="Home" />
        <LinkHeader>Hello!</LinkHeader>
        <IntroContainer>
          <Introduction>I'm</Introduction>
          <Introduction>{introduction}</Introduction>
          <Introduction>|</Introduction>
        </IntroContainer>
      </VerticalContainer>
      <Container>
        <Summary>
          {introductionSummary.map((item, index, theArray) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {/* add a dot between items but for the last item */}
              {index <= theArray.length - 2 && <Dot> . </Dot>}
            </React.Fragment>
          ))}
        </Summary>
      </Container>
    </>
  );
}
