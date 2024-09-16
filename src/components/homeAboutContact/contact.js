import React, { useState } from "react";
import styled from "styled-components";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// primer github icons
import { MailIcon } from "@primer/octicons-react";

// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// react tooltip
import { Tooltip as ReactTooltip } from "react-tooltip";

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
const LinkContainerNoLinkOutlinePointer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.4rem;
  outline: none;
  cursor: pointer;
`;
const Item = styled.div`
  flex: 0 0 auto;
`;
const ItemSomeMargin = styled.div`
  flex: 0 0 auto;
  margin-left: 0.5rem;
  @media (max-width: 48rem) {
    margin-left: 0.4rem;
  }
`;
const LinkSize = styled.span`
  font-size: 13pt;
  @media (max-width: 48rem) {
    font-size: 10.5pt;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.4rem;
`;
const ToolTip = styled(ReactTooltip)`
  font-size: 10pt;
  max-width: 12rem;
`;

export function Contact() {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);
  return (
    <VerticalContainer>
      <LinkHeader>Contact</LinkHeader>
      <CopyToClipboard
        text="hello@muguku.co.ke"
        // change tooltip text if copy successful
        onCopy={(result) => setCopiedToClipBoard(result)}
      >
        <LinkContainerNoLinkOutlinePointer
          data-for="getContent"
          data-tip
          onMouseLeave={() => {
            setCopiedToClipBoard(false);
          }}
          role="button"
          tabIndex="0"
        >
          <Item>
            <MailIcon size={16} />
          </Item>
          <ItemSomeMargin>
            <LinkSize>hello@muguku.co.ke</LinkSize>
          </ItemSomeMargin>
        </LinkContainerNoLinkOutlinePointer>
      </CopyToClipboard>
      <LinkContainer>
        <Item>
          <a
            href="https://www.linkedin.com/in/machariamuguku/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
          </a>
        </Item>
        <ItemSomeMargin>
          <a
            href="https://www.linkedin.com/in/machariamuguku/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkSize>linkedin.com/in/machariamuguku</LinkSize>
          </a>
        </ItemSomeMargin>
      </LinkContainer>
      {/* the universal react tooltip. Style tooltip here */}
      <ToolTip
        place="bottom"
        type="light"
        textColor="black"
        backgroundColor={"white"}
        id="getContent"
        getContent={() =>
          copiedToClipBoard
            ? "Yay! My email address has been copied to your clipboard✅"
            : "Click here to copy my email address to your clipboard 😀"
        }
      />
    </VerticalContainer>
  );
}
