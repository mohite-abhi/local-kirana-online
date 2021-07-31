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
            src="https://i.ibb.co/vzwWqvz/Screenshot-2021-07-31-My-Kirana-Online-Grocery-Shopping-App-2.png"
            alt="First slide"
            display= "block"
            max-width =  "100%"
            height= "400"
            paddingtop = "56.25%"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/S3PmqJW/Screenshot-2021-07-31-My-Kirana-Online-Grocery-Shopping-App-3.png"
            alt="Second slide"
            max-width =  "100%"
            height= "400"
            paddingtop = "56.25%"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Vt9gCPr/Screenshot-2021-07-31-My-Kirana-Online-Grocery-Shopping-App-1.png"
            alt="Third slide"
            max-width =  "100%"
            height= "400"
            paddingtop = "56.25%"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 // render(<ControlledCarousel />);