import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./articles.module.css";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarTimes, faClock } from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.container}>
      <h3>Latest Articles</h3>
      <div className={styles.horizontalContainer}>
        {data.allMediumPost.edges.map((edge) => (
          <a
            href={`https://medium.com/@iMash/${edge.node.uniqueSlug}?source=muguku.co.ke`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.LinkColor}
            key={edge.node.id}
          >
            <div className={styles.item}>
              <img
                src={
                  edge.node.virtuals.previewImage.imageId.length > 0
                    ? `https://miro.medium.com/max/600/${edge.node.virtuals.previewImage.imageId}`
                    : "https://miro.medium.com/max/600/1*gXNxIUk4dxql1L7tkjtXYg.png"
                }
                alt="medium article previewImage"
              />
              <h5>{edge.node.title}</h5>
              <div className={styles.bottomContainer}>
                <div>
                  <FontAwesomeIcon
                    icon={faCalendarTimes}
                    size="sm"
                    className={styles.goingDown}
                  />
                  &nbsp;
                  <span>{edge.node.createdAt}</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faClock}
                    size="sm"
                    className={styles.goingDown}
                  />
                  &nbsp;
                  <span>
                    {edge.node.virtuals.readingTime.toLocaleString("en-KE", {
                      maximumFractionDigits: 0
                    })}{" "}
                    mins
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
