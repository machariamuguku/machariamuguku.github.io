import React, { useState, useEffect } from "react";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faMedium } from "@fortawesome/free-brands-svg-icons";
// primer github icons
import { MarkGithubIcon, MailIcon } from "@primer/octicons-react";

// react tooltip
import ReactTooltip from "react-tooltip";
// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  color: white;
  @media (max-width: 48rem) {
    flex-direction: row;
    height: auto;
    width: 75vw;
  }
`;
const Item = styled.div`
  :last-child {
    margin-bottom: 0;
    @media (max-width: 48rem) {
      margin-right: 0;
    }
  }
  @media (max-width: 48rem) {
    flex: 0 0 auto;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;
const ItemClipboard = styled.div`
  flex: 0 0 auto;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.4rem;
  outline: none;
  cursor: pointer;
`;
const LinkColor = styled.a`
  color: white;
`;
const ReactToolTip = styled(ReactTooltip)`
  font-size: 10pt;
  max-width: 12rem;
`;

export function SocialLinks() {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);
  const [toolTipContent, setToolTipContent] = useState("");

  // set tooltip content after render
  // this is to avoid showing when rendering
  useEffect(() => {
    copiedToClipBoard
      ? setToolTipContent(
          "Yay! My email address has been copied to your clipboard✅"
        )
      : setToolTipContent(
          "Click here to copy my email address to your clipboard 😀"
        );

    return () => {
      setToolTipContent("");
    };
  }, [copiedToClipBoard]);

  return (
    <Container>
      {/* the universal react tooltip. Style tooltip here */}
      <ReactToolTip getContent={() => toolTipContent} />
      <Item>
        <LinkColor
          href="https://github.com/machariamuguku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MarkGithubIcon size={16} />
        </LinkColor>
      </Item>
      <Item>
        <LinkColor
          href="https://www.linkedin.com/in/machariamuguku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </LinkColor>
      </Item>
      <Item>
        <LinkColor
          href="https://muguku.medium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} size="1x" />
        </LinkColor>
      </Item>
      <ItemClipboard
        data-tip={toolTipContent}
        data-place="bottom"
        data-type="light"
        data-text-color="black"
        data-background-color="white"
        onMouseLeave={() => {
          setCopiedToClipBoard(false);
        }}
        role="button"
        tabIndex="0"
      >
        <CopyToClipboard
          text="hello@muguku.co.ke"
          // change tooltip text if copy successful
          onCopy={(result) => setCopiedToClipBoard(result)}
        >
          <Item>
            <MailIcon size={16} />
          </Item>
        </CopyToClipboard>
      </ItemClipboard>
    </Container>
  );
}
