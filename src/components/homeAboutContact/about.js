import React from "react";
import styled from "styled-components";

// components
import SEO from "../seo";
import { Carets } from "./carets";

// Todo: remove default exports everywhere
const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
`;
const ContainerBracketLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  a {
    color: white;
  }
  @media (max-width: 48rem) {
    margin-right: 0.5rem;
  }
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18rem;
  p {
    font-size: 13pt;
    font-weight: 400;
    margin-top: 0;
    @media (max-width: 48rem) {
      font-size: 11pt;
    }
  }
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
const Item = styled.div`
  flex: 0 0 auto;
`;
const ItemAnchorTag = styled.a`
  flex: 0 0 auto;
`;
const ItemBracketRight = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  @media (max-width: 48rem) {
    margin-left: 0.5rem;
  }
`;
const Brackets = styled.span`
  font-size: 7rem;
  @media (max-width: 48rem) {
    font-size: 6rem;
  }
`;

export function About() {
  return (
    <Container>
      <SEO title="About" />

      {/* left bracket */}
      <Item>
        <ContainerBracketLeft>
          <Item>
            <Brackets>{"["}</Brackets>
          </Item>

          <ItemAnchorTag
            href="#Prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"left"} />
          </ItemAnchorTag>
        </ContainerBracketLeft>
      </Item>

      <Item>
        <VerticalContainer>
          <LinkHeader>About</LinkHeader>
          <p>
            I'm a fullstack software engineer from Nairobi, Kenya. I design,
            code, and tinker with things. I speak React, Node.js, and Golang. I
            love to write, run and trail.
          </p>
        </VerticalContainer>
      </Item>

      {/* right bracket */}
      <ItemBracketRight>
        <Container>
          <ItemAnchorTag
            href="#Next"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"right"} />
          </ItemAnchorTag>
          <Item>
            <Brackets>{"]"}</Brackets>
          </Item>
        </Container>
      </ItemBracketRight>
    </Container>
  );
}
