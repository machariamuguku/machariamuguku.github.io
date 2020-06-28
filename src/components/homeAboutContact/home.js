import React from "react";
import styled, { keyframes } from "styled-components";

// custom typeWriter hook
import { useTypeWriter } from "../customHooks/useTypeWriter";

// components
import {SEO} from "../seo";
import { Carets } from "./carets";

const introductions = [
  "Macharia Muguku",
  "A Software Engineer",
  "A Full-Stack Developer",
  "A Minimalist"
];

const introductionSummary = ["ENGINEER", "DEVELOPER", "MINIMALIST"];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  a {
    color: white;
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
const ContainerBracketLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  @media (max-width: 48rem) {
    margin-right: 0;
  }
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18rem;
  @media (max-width: 48rem) {
    width: 15rem;
  }
`;
const Item = styled.div`
  flex: 0 0 auto;
`;
const ItemAnchor = styled.a`
  flex: 0 0 auto;
`;
const ItemBracketRight = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  @media (max-width: 48rem) {
    margin-left: 0;
  }
`;
const Brackets = styled.span`
  font-size: 7rem;
  @media (max-width: 48rem) {
    font-size: 6rem;
  }
`;
const LinkHeader = styled.span`
  font-size: 20pt;
  font-weight: bold;
  @media (max-width: 48rem) {
    font-size: 14pt;
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
const Dot = styled.span`
  font-size: 18pt;
`;
const Summary = styled.div`
  font-size: 10pt;
  font-weight: bolder;
  @media (max-width: 48rem) {
    font-size: 8pt;
    margin: 0;
  }
`;

export default function Home() {
  const introduction = useTypeWriter(introductions);

  return (
    <Container>
      <SEO title="Home" />

      {/* left bracket */}
      <Item>
        <ContainerBracketLeft>
          <Item>
            <Brackets>{"{"}</Brackets>
          </Item>

          <ItemAnchor
            href="#Prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction="left" />
          </ItemAnchor>
        </ContainerBracketLeft>
      </Item>

      <Item>
        <VerticalContainer>
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
      </Item>

      {/* right bracket */}
      <ItemBracketRight>
        <Container>
          <ItemAnchor
            href="#Next"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction="right" />
          </ItemAnchor>
          <Item>
            <Brackets>{"}"}</Brackets>
          </Item>
        </Container>
      </ItemBracketRight>
    </Container>
  );
}
