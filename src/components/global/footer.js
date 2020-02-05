import { Link } from "gatsby"
import React from "react"

/**
 * This is yet another slightly different syntax for a React functional component
 * Notice here it's () => (), which looks crazy - where are the curly braces?!?!?!?
 * When written this way, this is equivalent to an implicit return
 * So () => () is equal to () => { return() }, just another shorthand you might see in the wild
 * 
 * Right now the footer is empty but we'll fix that soon
 */
const Footer = () => (
  <footer>
  </footer>
)

export default Footer
