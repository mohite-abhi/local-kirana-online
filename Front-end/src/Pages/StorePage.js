//import './App.css';
import React from "react";
import Header from "../components/Fixed/Header";
import {StoreCards} from "../components/Store/StoreCards";
import ItemPage from "./ItemPage";
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




function loadSave(localVarName, toSave){
  let localItem = localStorage.getItem(localVarName);
  if (localItem == null || (localItem !== toSave && toSave !== '')){
    localStorage.setItem(localVarName, toSave);
    return toSave;
  }
  else {
    return localItem;
  }
}


function StorePage({ pin }) {

  let pinLoaded = loadSave('pin', pin);

  let history = useHistory();
  let { path, url } = useRouteMatch();
  const [shopid, setShopid] = useState("");
  const [stores, setStores] = useState([]);

  const callback = (val) => {
    setShopid(val);
    history.push(`${url}/item`);
  };



  let [initializing, initialization] = useState("yes");
  if (initializing === "yes"){


     fetch("http://localhost:9000/storesFromLocations", {
      method: "POST",
      body: JSON.stringify({ value: pinLoaded }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        onStoreChange(res.storeData);
      });

  const onStoreChange = (data) => {
    setStores(data);
  };



  initialization("done");
  }


  let props = {
    stores: stores,
    callback: callback,
  };
  return (
    <Switch>
      <Route exact path={path}>
        <Header />
        <StoreCards props={props} />
      </Route>
      <Route path={`${path}/item`}>
        <ItemPage shopid={shopid}></ItemPage>
      </Route>

    </Switch>
  );
}
export default StorePage;
