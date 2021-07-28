//import './App.css';
import Items from "./components/Items";
import React from "react";
import TabBar from "./components/tabBar";
import {useState } from "react";
import Checkout from "./components/Checkout";


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


function ItemPage({ shopid }) {

  let shopidLoaded = loadSave('shopid', shopid);


  let [newItem, setNewItem] = useState([]);
  let [initializing, initialization] = useState("yes");
  function itemChange(data){
    setNewItem(data);
  }

  if (initializing === "yes"){
    fetch("http://localhost:9000/shopitem/id", {
      method: "POST",
      body: JSON.stringify({ val: shopidLoaded }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      setNewItem(res);
    });
  initialization("done");
  }


 

  return (
    <>
      <TabBar shopid={shopidLoaded} itemChange={itemChange}/>
      <Items items={newItem} />
     
    </>
  );
}
export default ItemPage;
