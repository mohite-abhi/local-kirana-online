//import './App.css';
import React from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import ItemPage from "./ItemPage";
//import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
//variable pakeibi store id store karibaku
import { useCallback, useState } from "react";
import { PropTypes, Component } from "react";
import Checkout from "./components/Checkout"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

function StorePage({ stores }) {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const [shopid, setShopid] = useState("");
  const callback = (val) => {
    setShopid(val);
    history.push(`${url}/item`);
  };
  const goCheckout = () => {
    history.push(`${url}/checkout`);
  };

  let props = {
    stores: stores,
    callback: callback,
  };
  return (
    <Switch>
      <Route exact path={path}>
        <Header />
        <Cards props={props} />
      </Route>
      <Route path={`${path}/item`}>
        <ItemPage shopid={shopid}></ItemPage>
      <button onClick = {()=>goCheckout()}>Checkout</button>
      </Route>
      <Route path={`${path}/checkout`}>
        <Checkout/>
      </Route>

    </Switch>
  );
}
export default StorePage;
