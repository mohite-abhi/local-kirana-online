import React from "react";
//import "./App.css";
import Slider from "./components/slider";

import Header from "./components/header";
import Pin from "./components/pincodeform";
import UseGeolocation from "./components/geoloc";

function Page0({ onPinChange, history }) {
  return (
    <>
      <Header />
      <Slider />
      <UseGeolocation />
      <Pin onPinChange={onPinChange} history={history} />
    </>
  );
}

export default Page0;
