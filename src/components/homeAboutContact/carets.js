import React from "react";
import styled from "styled-components";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  cursor: pointer;
  @media (max-width: 48rem) {
    font-size: 3rem;
  }
`;

export function LeftCaret() {
  return <StyledFontAwesomeIcon icon={faCaretLeft} size="sm" />;
}

export function RightCaret() {
  return <StyledFontAwesomeIcon icon={faCaretRight} size="sm" />;
}
