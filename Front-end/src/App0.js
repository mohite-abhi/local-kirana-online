import React from "react";
//import "./App.css";
import Slider from "./components/slider";

import Header from "./components/header";
import Pin from "./components/pincodeform";
import { Link, useHistory } from "react-router-dom";

function Page0({ onPinChange, history }) {
  return (
    <>
      <Header />
      <Slider />
      <Pin onPinChange={onPinChange} history={history} />
    </>
  );
}

export default Page0;
