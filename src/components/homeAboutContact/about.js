import React, { useContext } from "react";
import styled from "styled-components";

// context provider
import { MenuContext } from "../menuContext";

// components
import SEO from "../seo";
import { LeftCaret, RightCaret } from "./carets";

const navigationItems = ["Home", "About", "Contact"];

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
    margin-right: 0.2rem;
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
    @media (max-width: 48rem) {
      font-size: 11pt;
    }
  }
  @media (max-width: 48rem) {
    width: 15rem;
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
    margin-left: 0.2rem;
  }
`;
const Brackets = styled.span`
  font-size: 7rem;
  @media (max-width: 48rem) {
    font-size: 6rem;
  }
`;

export function About() {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  const changeMenu = (direction) => {
    const indexOfCurrentItem = navigationItems.indexOf(activeMenu);

    // Todo: move this function up/reuse/to context?

    // if direction is forward
    if (direction === "Next") {
      // set to index of next item
      // if the next index is equal to the array length
      // set to first index
      if (indexOfCurrentItem + 1 === navigationItems.length) {
        setActiveMenu(navigationItems[0]);
        return;
      }
      setActiveMenu(navigationItems[indexOfCurrentItem + 1]);
      return;
    }
    // set to index of previous item
    // if the previous index is less than zero (first index)
    // set to the biggest index
    if (indexOfCurrentItem - 1 < 0) {
      setActiveMenu(navigationItems[navigationItems.length - 1]);
      return;
    }
    setActiveMenu(navigationItems[indexOfCurrentItem - 1]);
  };

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
              changeMenu("Prev");
            }}
          >
            <LeftCaret />
          </ItemAnchorTag>
        </ContainerBracketLeft>
      </Item>

      <Item>
        <VerticalContainer>
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
              changeMenu("Next");
            }}
          >
            <RightCaret />
          </ItemAnchorTag>
          <Item>
            <Brackets>{"]"}</Brackets>
          </Item>
        </Container>
      </ItemBracketRight>
    </Container>
  );
}
