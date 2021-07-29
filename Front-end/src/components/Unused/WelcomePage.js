import React from "react";
//import "./App.css";
import Slider from "./components/Slide/slider";

import Header from "./components/Fixed/header";
import Pin from "./components/WelcomePage/pincodeform";
import UseGeolocation from "./components/WelcomePage/geoloc";

function WelcomePage({ onPinChange, history }) {
  return (
    <>
      <Header />
      <Slider />
      <UseGeolocation />
      <Pin onPinChange={onPinChange} history={history} />
    </>
  );
}

export default WelcomePage;
