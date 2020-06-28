import React from "react";
import GatsbyLogo from "../images/Gatsby_Logo.svg";
import styled from "styled-components";

const FooterStl = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 4.375rem;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  font-size: 11pt;
  @media (max-width: 48rem) {
    flex-direction: column;
    font-size: 10.5pt;
    height: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
const PadOnMobile = styled.span`
  @media (max-width: 48rem) {
    padding-top: 0.3rem;
  }
`;
const LinkColor = styled.a`
  color: whitesmoke;
  img {
    height: inherit;
    width: 4.375rem;
    @media (max-width: 48rem) {
      width: 4.063rem;
    }
  }
`;
const MarginBottom = styled.div`
  @media (max-width: 48rem) {
    border-bottom-color: #808b97;
    border-bottom-style: solid;
    border-bottom-width: 0.063rem;
    padding-bottom: 0.3rem;
  }
`;

export function Footer({ siteOwner }) {
  return (
    <FooterStl>
      <MarginBottom>
        <span>
          &copy;{new Date().getFullYear()} {siteOwner}.&nbsp;
        </span>
        <span>All rights reserved.&nbsp;</span>
      </MarginBottom>
      <PadOnMobile>
        Handcrafted by Me. Made with &nbsp;
        <LinkColor
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GatsbyLogo} alt="gatsby logo" valign="middle" />
        </LinkColor>
      </PadOnMobile>
    </FooterStl>
  );
}
