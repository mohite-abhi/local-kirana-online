//import './App.css';
import React from "react";
import Header from "./components/header";
import Cards from "./components/cards";
//import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
//variable pakeibi store id store karibaku
import { useCallback, useState } from "react";
import { PropTypes, Component } from 'react'
function App1({ stores }) {

  // state = {message : ""}
  // callbackFunction = (childData) => {
  //   setState({message:childData})
  // },
  const [shopid, setShopid] = useState("");
  const [item, setItem] = useState([]);
  const callback = (val) =>{
    setShopid(val);
    console.log(val);
    fetch("http://localhost:9000/shopitem/id", {
      method: "POST",
      body: JSON.stringify({ val: val }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res); 
        onItemUpdate(res.storeData);
      });
  };
  const onItemUpdate = (data) => {
    setItem(data);
  };

 
  let props = {
    stores : stores,
    callback : callback
  }
 
  return (
    <>
      <Header />
      <Cards props={props} />
    
    </>
  );
}
export default App1;
