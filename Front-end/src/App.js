import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import page0 from "./App0";
import App1 from "./App1";
import page2 from "./App3";

function App (){
  return(
    <BrowserRouter>
    <switch>
      <Route exact path="/" component={page0} />
      <Route path="/shop" component={App1} />
      <Route path="/item" component={page2} />
    </switch>
  </BrowserRouter>
  )
}

export default App