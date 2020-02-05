import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/**
 * What does this SEO function that Gatsby give us actually do?
 * The basic idea is that is allows us to call this component to easily modify HTML <head> stuff per component
 * The data based in - description, lang, meta and title are all adjustable per component 
 * All you have to do is send down a prop
 *
 */

function SEO({ description, lang, meta, title }) {
  /**
   * useStaticQuery is a true React Hook
   * As such it is simultaneously making the query using useStaticQuery
   * And then immediately assigning the return to the `site` object
   * This function then uses the site object as defaults for the gatsby's site's metadata
   */
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  // Here we check to see if the description argument was passed into the SEO function
  // If it wasn't passed in, this code will fallback to the `site` query data
  const metaDescription = description || site.siteMetadata.description

  /**
   * The return makes use of React Helmet, the best utility for building metadata in React
   * It's a pretty basic component return but the Helmet setup is kinda weird
   * Check out the Helmet docs: https://github.com/nfl/react-helmet
   */
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
