import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

// PRODUCT IMAGE
const CarouselImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 25px auto;
  max-width: 800px;
  padding-top: 25px;
`
const CarouselImage = styled(Image)`
  display: block;
  flex-basis: 750px;
  margin: 25px auto;
  max-width: 750px;
  margin: 25px auto; 
`
const ChevronLeft = styled.svg`
  cursor: pointer;
  height: 20px;
  stroke-width: 1;
  transform: scaleX(-1);
  transition: 0.4s ease-in-out;
  width: 20px;
`  
const ChevronRight = styled.svg`
  cursor: pointer;
  height: 20px;
  stroke-width: 1;
  transform: rotate(-180deg) scaleX(-1); 
  transition: 0.4s ease-in-out;
  width: 20px;
`  

// PRODUCT SINGLE COMPONENT
export default class ProductSingle extends React.Component {

  /**
   * IMAGE CAROUSEL + TRANSITIONS
   * 
   * We're getting Gatsby-enhanced childImageSharp fluid images from data (via gatsby-node.js)
   * currentIndex = 0, because we know we're showing the first array image every time
   * lastIndex = .length on images[x], because we don't know how long the array of images is
   * 
   * nextImage() = currentIndex + 1 until we hit lastIndex - 1, then we reset to zero to cycle through images
   * prevImage() = currenIndex - 1 until we hit currentIntex = 0, then we reset to lastIndex - 1 to get to the end of the array
   * 
   * Tired yet? Welcome to the thunderdome.
   * 
   */ 
  constructor(props) {
    super(props);

    this.state = {
      appear: true,
      currentIndex: 0,
      image: this.props.images.carouselImages.edges[0].node.childImageSharp.fluid,
      key: this.props.images.carouselImages.edges[0].node.id,
      lastIndex: this.props.images.carouselImages.edges.length,
    }
  }

  /* Sets a toggle for whether something should appear */
  toggleAppear = () => {
    this.setState({
      appear: !this.state.appear
    })
  }

  /** 
   * Next image to create a carousel 
   * Never gets triggered if we don't have a carousel of images
   * */ 
  nextImage = () => {
    let newIndex
    if (this.state.currentIndex === (this.state.lastIndex - 1)) {
      newIndex = 0
    } else {
      newIndex = this.state.currentIndex + 1
    }
    this.setState({
      currentIndex: newIndex,
      image: this.props.images.carouselImages.edges[newIndex].node.childImageSharp.fluid,
      key: this.props.images.carouselImages.edges[newIndex].node.id
    })
  }

  /** 
   * Previous image to create a carousel 
   * Never gets triggered if we don't have a carousel of images
   */ 
  prevImage = () => {
    let newIndex
    if (this.state.currentIndex === 0) {
      newIndex = this.state.lastIndex - 1
    } else {
      newIndex = this.state.currentIndex - 1
    }
    
    this.setState({
      currentIndex: newIndex,
      image: this.props.images.carouselImages.edges[newIndex].node.childImageSharp.fluid,
      key: this.props.images.carouselImages.edges[newIndex].node.id
    })
  }

  render() {
    return (
     <>   
        {/* IMAGE */}
        <CarouselImageContainer>
          { this.state.lastIndex > 1 && 
            <ChevronLeft 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" 
              fill="none" 
              stroke="currentcolor"
              onClick={ () => this.prevImage() }>
              <path d="M5 0.7071067811865475 L12.292893218813452 8 L5 15.292893218813452"></path>
            </ChevronLeft>
          }
          <CarouselImage
            fluid={ this.state.image }
            key={ this.state.key }
          />
          { this.state.lastIndex > 1 && 
            <ChevronRight 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 16 16" 
              fill="none"
              stroke="currentcolor"
              onClick={ () => this.nextImage() }>
              <path d="M5 0.7071067811865475 L12.292893218813452 8 L5 15.292893218813452"></path>
            </ChevronRight>
          }
        </CarouselImageContainer> 
      </>
    )
  }
}
