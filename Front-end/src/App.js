import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Page0 from "./App0";
import App1 from "./App1";

function App() {
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
          <Page0 onPinChange={onPinChange} history={history} />
        </Route>
        <Route path="/shop">
          <App1 stores={stores} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
