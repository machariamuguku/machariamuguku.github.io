import React, { useState, useEffect } from "react";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faMedium,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
    width: 60vw;
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
const IconSize = styled(FontAwesomeIcon)`
  width: 1.063rem;
  height: 1.063rem;
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
          <IconSize icon={faGithub} />
        </LinkColor>
      </Item>
      <Item>
        <LinkColor
          href="https://www.linkedin.com/in/machariamuguku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSize icon={faLinkedinIn} />
        </LinkColor>
      </Item>
      <Item>
        <LinkColor
          href="https://medium.com/@imash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSize icon={faMedium} />
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
            <IconSize icon={faEnvelope} />
          </Item>
        </CopyToClipboard>
      </ItemClipboard>
    </Container>
  );
}
