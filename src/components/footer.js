import React from "react";
import GatsbyLogo from "../images/Gatsby_Logo.svg";
import styled from "styled-components";

const FooterStl = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  font-size: 11pt;
  @media (max-width: 48rem) {
    flex-direction: column;
    font-size: 9pt;
    height: 40px;
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
  color: white;
  img {
    height: inherit;
    width: 70px;
    @media (max-width: 48rem) {
      width: 65px;
    }
  }
`;
const MarginBottom = styled.div`
  @media (max-width: 48rem) {
    border-bottom-color: #808b97;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    padding-bottom: 0.3rem;
  }
`;

export default function Footer({ siteOwner }) {
  return (
    <FooterStl>
      <MarginBottom>
        <span>
          &copy;{new Date().getFullYear()} {siteOwner}.&nbsp;
        </span>
        <span>All rights reserved.&nbsp;</span>
      </MarginBottom>
      <PadOnMobile>
        Handcrafted by Me. Built with &nbsp;
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
