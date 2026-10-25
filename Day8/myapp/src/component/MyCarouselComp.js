import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgpath from '../shared/constsnt/constantData';


const MyCarouselComp = () => {
  return (
    <div>
      <h2>This is my carousel form</h2>
      <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={imgpath.iphone} alt='iphone' style={{width:"100%" , height:"410px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={imgpath.s26ultra} alt='s26ultra'style={{width:"100%" , height:"410px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={imgpath.nothing} alt='nothing4a'style={{width:"100%" , height:"410px"}}/>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarouselComp
