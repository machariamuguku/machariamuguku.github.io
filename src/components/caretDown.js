import React from "react";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const CaretDownStl = styled.div`
  height: 6rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
`;
const BlinkAnimation = keyframes`
  from {
    color: transparent;
  }
  to {
    color: transparent;
    padding-top: 3rem;
  }
  50% {
    color: white;
  }
`;
const AnimateCaretDown = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  -webkit-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -moz-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -ms-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -o-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  outline: none;
  @media (max-width: 48rem) {
    margin-top: 0;
    padding: 2rem;
  }
`;
const GoingDown = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transform: scaleX(1.5);
  &:last-child {
    margin-top: -0.3rem;
  }
  @media (max-width: 48rem) {
    font-size: 1.1rem;
  }
`;

export function CaretDown() {
  return (
    <CaretDownStl>
      <AnimateCaretDown
        onClick={() => {
          console.log("go down implementation here");
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            console.log("go down implementation here");
          }
        }}
        role="button"
        tabIndex="0"
      >
        <GoingDown icon={faChevronDown} size="sm" />
        <GoingDown icon={faChevronDown} size="sm" />
      </AnimateCaretDown>
    </CaretDownStl>
  );
}
