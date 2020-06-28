import React from "react";
import styled from "styled-components";

// components
import { SEO } from "../seo";

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
  font-size: 15pt;
  font-weight: bold;
  @media (max-width: 48rem) {
    font-size: 14pt;
  }
`;
const Para = styled.p`
  font-size: 13pt;
  font-weight: 400;
  margin-top: 0;
  @media (max-width: 48rem) {
    font-size: 11pt;
  }
`;

export function About() {
  return (
    <VerticalContainer>
      <SEO title="About" />
      <LinkHeader>About</LinkHeader>
      <Para>
        I'm a fullstack software engineer from Nairobi, Kenya. I design, code,
        and tinker with things. I speak React, Node.js, and Golang. I love to
        write, run and trail.
      </Para>
    </VerticalContainer>
  );
}
