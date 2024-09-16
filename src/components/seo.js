/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export function Seo({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  pathname
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage?.src
    ? `${site.siteMetadata.siteUrl}${metaImage.src}`
    : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical
              }
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(",")
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image
                },
                {
                  property: `og:image:alt`,
                  content: title
                },
                {
                  property: "og:image:width",
                  content: metaImage.width
                },
                {
                  property: "og:image:height",
                  content: metaImage.height
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image"
                }
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary"
                }
              ]
        )
        .concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }),
  pathname: PropTypes.string
};
