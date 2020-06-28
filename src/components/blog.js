import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarTimes, faClock } from "@fortawesome/free-solid-svg-icons";

// styles
const MainContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const Header = styled.h1`
  font-size: 16pt;
`;
const Item = styled.a`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 1rem;
  width: 26vw;
  height: 16.563rem;
  background-color: #0f1113;
  color: white;
  text-decoration: none;
  img {
    height: 9.375rem;
  }
  @media (max-width: 48rem) {
    width: 90vw;
    margin: 0 0 1.5rem 0;
    margin-right: 0;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 0.5rem 0.5rem 0.5rem;
  margin-top: auto;
  span {
    font-size: 10pt;
    font-weight: 600;
  }
`;

export function Blog() {
  const data = useStaticQuery(
    graphql`
      {
        allMediumPost(
          limit: 3
          filter: { type: { eq: "Post" } }
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              createdAt(formatString: "DD MMM YYYY")
              virtuals {
                previewImage {
                  imageId
                }
                readingTime
              }
              uniqueSlug
            }
          }
        }
      }
    `
  );
  return (
    <MainContainer>
      <Container>
        <Header>My Blog</Header>
      </Container>

      <Container>
        {data.allMediumPost.edges.map((edge) => (
          <Item
            href={`https://medium.com/@iMash/${edge.node.uniqueSlug}?source=muguku.co.ke`}
            target="_blank"
            rel="noopener noreferrer"
            key={edge.node.id}
          >
            <img
              src={
                edge.node.virtuals.previewImage.imageId.length > 0
                  ? `https://miro.medium.com/max/600/${edge.node.virtuals.previewImage.imageId}`
                  : "https://miro.medium.com/max/600/1*gXNxIUk4dxql1L7tkjtXYg.png"
              }
              alt="medium blog previewImage"
            />
            <h5>{edge.node.title}</h5>
            <BottomContainer>
              <div>
                <FontAwesomeIcon icon={faCalendarTimes} size="sm" />
                &nbsp;
                <span>{edge.node.createdAt}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} size="sm" />
                &nbsp;
                <span>
                  {edge.node.virtuals.readingTime.toLocaleString("en-KE", {
                    maximumFractionDigits: 0
                  })}{" "}
                  mins
                </span>
              </div>
            </BottomContainer>
          </Item>
        ))}
      </Container>
    </MainContainer>
  );
}
