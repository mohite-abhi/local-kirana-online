import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import StorePage from "./StorePage";

function OnlineKirana() {
  const [pin, setPin] = useState("");
  let history = useHistory();
  const [stores, setStores] = useState([]);

  const onPinChange = (value) => {
    setPin(value);
    fetch("http://localhost:9000/storesFromLocations", {
      method: "POST",
      body: JSON.stringify({ value: value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        onStoreChange(res.storeData);
      });
  };
  const onStoreChange = (data) => {
    setStores(data);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage onPinChange={onPinChange} history={history} />
        </Route>
        <Route path="/shop">
          <StorePage stores={stores} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default OnlineKirana;
