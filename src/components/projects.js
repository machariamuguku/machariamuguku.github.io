import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Octicon, { Repo, Star, RepoForked } from "@primer/octicons-react";

import styles from "./projects.module.css";

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
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h3
          style={{
            fontSize: "12pt",
            paddingTop: "0.5rem"
          }}
        >
          Popular Projects
        </h3>
      </div>
      <div className={styles.container}>
        {edges.map((edge) => (
          <a
            href={edge.node.url}
            target="blank"
            rel="noopener noreferrer"
            key={edge.node.id}
            className={styles.item}
          >
            <h5>
              <Octicon icon={Repo} />
              &nbsp;
              {edge.node.name}
            </h5>
            <div>
              <span style={{ fontSize: "11pt" }}>{edge.node.description}</span>
            </div>
            <div className={styles.downContainer}>
              <div className={styles.downContainerItem}>
                {edge.node.languages.edges.map((edge) => (
                  <span
                    key={edge.node.id}
                    style={{ color: `${edge.node.color}`, fontSize: "11pt" }}
                  >
                    {edge.node.name}
                  </span>
                ))}
              </div>
              <div className={styles.downContainerItem}>
                <Octicon icon={Star} />
                {edge.node.stargazers.totalCount}
                &nbsp;
              </div>
              <div className={styles.downContainerItem}>
                <Octicon icon={RepoForked} />
                {edge.node.forkCount}
                &nbsp;
              </div>
              <div className={styles.downContainerItem}>
                {edge.node.diskUsage}kb
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
