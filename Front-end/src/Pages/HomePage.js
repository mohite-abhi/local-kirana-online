import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

// import WelcomePage from "./WelcomePage";
import StorePage from "./StorePage";

import Slider from "../components/Slide/Slider";

import Header from "../components/Fixed/Header";
import Pin from "../components/Home/PincodeForm";
import UseGeolocation from "../components/Home/Geoloc";
import Footer from "../components/Fixed/footer";

function OnlineKirana() {
  const [pin, setPin] = useState("");
  let history = useHistory();
  // const [stores, setStores] = useState([]);

  const onPinChange = (value) => {
    setPin(value);
    // fetch("https://local-kirana-online-backend.herokuapp.com/storesFromLocations", {
    //   method: "POST",
    //   body: JSON.stringify({ value: value }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     onStoreChange(res.storeData);
    //   });
  };
  // const onStoreChange = (data) => {
  //   setStores(data);
  // };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <WelcomePage onPinChange={onPinChange} history={history} /> */}
           <Header />
          <Slider />
          {/* <UseGeolocation /> */}
          <Pin onPinChange={onPinChange} history={history} />
         <footer>
          <Footer />
          </footer>
        </Route>
        <Route path="/shop">
          <StorePage pin={pin} />
         
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default OnlineKirana;
