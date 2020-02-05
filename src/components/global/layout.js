import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import "../../css/normalize.css"
import "../../css/fonts.css"
import variables from "../../css/variables"

import Header from "./header"
import Footer from "./footer"



/**
 * This layout component is doing a lot of stuff
 * It's a functional component - why? You can see Layout is set equal to an arrow function
 * 
 * { children }
 * We're passing in `children` - what is that? This allows the component to wrap around other components
 * Look down in the return (which is basically the same as the render method in class-based react)
 * You'll see children used, that's where all the child components get injected
 * This is best practice react - build components that do one thing and can be used by others
 * 
 * useStaticQuery()
 * Next thing you'll notice is useStaticQuery() - this is a React Hook provided by the Gatsby library
 * It allow us to fetch data inside of a component using graphql, also included with Gatsby
 * Notice both are imported above through the Gatsby dependency, not separate dependencies
 * 
 * graphql``
 * Our hook references a GraphQL query called `site` - what is site? 
 * Open up http://localhost:8000/___graphql
 * Gatsby is running a Node server with a GraphQL in front of it on your computer, which you're querying
 * What you see is the data-driven side of your Gatsby site, GraphiQL is GraphQL query builder
 * Copy and paste the query below into and see the response
 * You'll see it references gatsby-config.js
 */
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /**
   * Where's my render method? 
   * Well in functional React, you have no methods because we don't have classes
   * Instead React functional components have returns, just like regular old components
   * 
   * Also notice the enclosing brackets - <></> - what do these do?
   * These are abbreviations for a React Fragment
   * Remember, inside of the return in React you have access to the JSX template language 
   * JSX is looking for a single node to return to the browser but we normally want to return a bunch of stuff
   * The fragment gives React a single node without us having to wrap it another <div>
   * And it allows us to return whatever we want inside of that - regular JSX rules apply
   * 
   * ThemeProvider is a cool little thing from styled-components I like
   * It allows you send your site variables down to all your components on a prop (the `theme` prop)
   * This gives all child styled-components easy access to the same layout features
   * Check out /src/components/css/variables.js to see more
   * 
   * Now, look at the prop going into `siteTitle` on the Header component - where is that coming from?
   * `data` is the prop gatsby places GraphQL responses on
   * In `useStaticQuery`, remember we queried for site > siteMetadata > title
   * Gatsby mutated the GraphQL response into an object with those same keys
   * Add it all together and our title can be found on data.site.siteMetadata.title
   */
  return (
    <>
      <ThemeProvider theme={variables}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </>
  )
}

/**
 * Prop types are a way to check incoming prop data and make sure it's what we're expecting
 * This pattern is kinda on the way out
 * If you want true type checking with Javascript, a superset of the language called Typescript is the tool
 * It can make sense at large scale but doesn't make much sense for small/medium apps...yet.
 * 
 * In this case we're taking in children into the component and indicating that it must be present
 * This makes sense, as our Layout component is always near the top of the component tree
 * It needs children components for our site to actually show anything
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
