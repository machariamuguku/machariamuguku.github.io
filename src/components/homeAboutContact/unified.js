import React from "react";
import styled from "styled-components";

import { Carets } from "./carets";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Item = styled.div`
  flex: 0 0 auto;
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
const Brackets = styled.span`
  font-size: 7rem;
  @media (max-width: 48rem) {
    font-size: 6rem;
  }
`;
const ItemAnchor = styled.a`
  flex: 0 0 auto;
`;
const ItemBracketRight = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  @media (max-width: 48rem) {
    margin-left: 0.5rem;
  }
`;

export function Unified({ bracketLeft, bracketRight, children }) {
  return (
    <Container>
      {/* left bracket */}
      <Item>
        <ContainerBracketLeft>
          <Item>
            <Brackets>{bracketLeft}</Brackets>
          </Item>
          <ItemAnchor
            href="#Prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"left"} />
          </ItemAnchor>
        </ContainerBracketLeft>
      </Item>
      {/* Main Content */}
      <Item>{children}</Item>
      {/* right bracket */}
      <ItemBracketRight>
        <Container>
          <ItemAnchor
            href="#Next"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"right"} />
          </ItemAnchor>
          <Item>
            <Brackets>{bracketRight}</Brackets>
          </Item>
        </Container>
      </ItemBracketRight>
    </Container>
  );
}
