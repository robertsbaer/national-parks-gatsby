/**
 * What is this weird little file?
 * 
 * Because React is all in JS, you can take the way you approach styling up a level
 * Solutions like Sass and even native CSS have long allowed for variables
 * But in React, you can set styles to use real JS now with CSS-in-JS solutions like styled-components
 * So that's what we do here - just set up baseline style variables
 * This is a starter list but we could obvious scale this up as our app increases in complexity
 * 
 * NOTE: use a six-character hex code for all colors to allow alpha channel
 * adjustment without adding extra vars and/or a color manipulation lib.
 *
 * Example:
 * // use the brand color at 25% opacity
 * border-color: ${colors.red}25;
 */

// Variables 
const variables = { 
  colors: {
    lightGray: `#d2d2d2`,
    lightestGray: `#e7e7e7`,
    mediumGray: `#898989`,
    darkGray: `#5a5a5a`,
    black: `#0c0c0c`
  },
  breakpoints: {
    tiny: '350px',
    mobile: '400px',
    phablet: '550px',
    tablet: '768px',
    laptop: '1000px',
    desktop: '1200px',
    hd: '1600px'
  },
  zIndex: {
    zIndexNegative: '-10',
    zIndex00: '0',
    zIndex01: '10',
    zIndex02: '20',
    zIndex03: '30',
    zIndex04: '40',
    zIndex05: '50',
    zIndex06: '60',
    zIndex07: '70',
    zIndex08: '80',
    zIndex09: '90'
  }
}

export default variables