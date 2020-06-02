import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarTimes, faClock } from "@fortawesome/free-solid-svg-icons";

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95vw;
  color: white;
  margin-bottom: 4rem;
  text-align: center;
`;
const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 2rem;
  width: 320px;
  height: 265px;
  background-color: #0f1113;
  img {
    height: 150px;
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
const LinkColor = styled.a`
  color: white;
  text-decoration: none;
`;

export function Articles() {
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
    <Container>
      <h3>Latest Articles</h3>
      <HorizontalContainer>
        {data.allMediumPost.edges.map((edge) => (
          <LinkColor
            href={`https://medium.com/@iMash/${edge.node.uniqueSlug}?source=muguku.co.ke`}
            target="_blank"
            rel="noopener noreferrer"
            key={edge.node.id}
          >
            <Item>
              <img
                src={
                  edge.node.virtuals.previewImage.imageId.length > 0
                    ? `https://miro.medium.com/max/600/${edge.node.virtuals.previewImage.imageId}`
                    : "https://miro.medium.com/max/600/1*gXNxIUk4dxql1L7tkjtXYg.png"
                }
                alt="medium article previewImage"
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
          </LinkColor>
        ))}
      </HorizontalContainer>
    </Container>
  );
}
