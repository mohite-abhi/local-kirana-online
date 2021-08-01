import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// imported by Front-end/src/Pages/Homepage.js
export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XJWBkND/Whats-App-Image-2021-08-01-at-13-08-31.jpg"
            alt="First slide"
            display= "block"
            max-width =  "100%"
            height= "500"
            paddingtop = "56.25%"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tK8ynkv/Whats-App-Image-2021-08-01-at-13-10-06.jpg"
            alt="Second slide"
            max-width =  "100%"
            height= "500"
            paddingtop = "56.25%"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/xzvpCrQ/Whats-App-Image-2021-08-01-at-13-16-27.jpg"
            alt="Third slide"
            max-width =  "100%"
            height= "500"
            paddingtop = "56.25%"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 // render(<ControlledCarousel />);