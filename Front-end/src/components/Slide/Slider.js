import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./slider.css";

// imported by Front-end/src/Pages/Homepage.js
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let slides = [];

    ["https://imgur.com/HXliRnW.png",
    "https://imgur.com/zbKMM3E.png",
    "https://imgur.com/dVG7tEZ.png",
    "https://imgur.com/WWQ6JzP.png"].map((url) => {
     slides.push(<Carousel.Item>
          <img
            // className="d-block w-100"
            src={url}
            alt=""
            display="block"
          />
          {/* <Carousel.Caption>We have everything!</Carousel.Caption> */}
        </Carousel.Item>)
  });
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
       {slides}
      </Carousel>
    </div>
  );
}

// render(<ControlledCarousel />);
