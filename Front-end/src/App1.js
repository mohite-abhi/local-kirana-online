//import './App.css';
import React from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import App3 from "./App3";
//import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
//variable pakeibi store id store karibaku
import { useCallback, useState } from "react";
import { PropTypes, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

function App1({ stores }) {
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const [shopid, setShopid] = useState("");
  const [items, setItems] = useState([]);
  const callback = (val) => {
    setShopid(val);
    fetch("http://localhost:9000/shopitem/id", {
      method: "POST",
      body: JSON.stringify({ val: val }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        onItemUpdate(res);
      });
    history.push(`${url}/item`);
  };
  const onItemUpdate = (data) => {
    setItems(data);
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
        <App3 items={items}></App3>
      </Route>
    </Switch>
  );
}
export default App1;
