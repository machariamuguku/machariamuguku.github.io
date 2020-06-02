import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Octicon, { Repo, Star, RepoForked } from "@primer/octicons-react";
import styled from "styled-components";

const MainContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0f1113;
  padding-bottom: 2rem;
`;
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Item = styled.a`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  margin: 1rem;
  width: 20rem;
  height: 10rem;
  padding: 1rem;
  background-color: #000;
  color: white;
  text-decoration: none;
`;
const DownContainer = styled.div`
  margin-top: auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const Description = styled.span`
  font-size: 11pt;
`;
const DownContainerItem = styled.div`
  flex: 1;
  font-size: 10pt;
`;
const Header = styled.h3`
  font-size: 12pt;
  padding-top: 0.5rem;
`;
const NodeColor = styled.span`
  color: ${(props) => props.color || "white"};
`;

// todo: trim text if overflows
export function Projects() {
  const {
    github: {
      viewer: {
        repositories: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 6
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(
                    first: 1
                    orderBy: { field: SIZE, direction: DESC }
                  ) {
                    edges {
                      node {
                        id
                        name
                        color
                      }
                    }
                  }
                  diskUsage
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <MainContainer>
      <Container>
        <Header>Popular Projects</Header>
      </Container>

      <Container>
        {edges.map((edge) => (
          <Item
            href={edge.node.url}
            target="blank"
            rel="noopener noreferrer"
            key={edge.node.id}
          >
            <h5>
              <Octicon icon={Repo} />
              &nbsp;
              {edge.node.name}
            </h5>
            <div>
              <Description>{edge.node.description}</Description>
            </div>

            <DownContainer>
              <DownContainerItem>
                {edge.node.languages.edges.map((edge) => (
                  <NodeColor key={edge.node.id} color={edge.node.color}>
                    {edge.node.name}
                  </NodeColor>
                ))}
              </DownContainerItem>
              <DownContainerItem>
                <Octicon icon={Star} />
                {edge.node.stargazers.totalCount}
                &nbsp;
              </DownContainerItem>
              <DownContainerItem>
                <Octicon icon={RepoForked} />
                {edge.node.forkCount}
                &nbsp;
              </DownContainerItem>
              <DownContainerItem>{edge.node.diskUsage}kb</DownContainerItem>
            </DownContainer>
          </Item>
        ))}
      </Container>
    </MainContainer>
  );
}
