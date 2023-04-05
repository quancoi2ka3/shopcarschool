import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../image/xe1.jpg" 
import image2 from "../image/xe2.jpg"
import image3 from "../image/xe3.jpg"


function Slide() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={image1}
          alt="First slide" style={{height:'350px'}}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={image2}
          alt="Second slide"  style={{height:'350px'}}
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100   "
          src={image3}
          alt="Third slide"  style={{height:'350px'}}
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slide;
