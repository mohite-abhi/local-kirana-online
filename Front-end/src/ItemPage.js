//import './App.css';
import Items from "./components/Items";
import React from "react";
import TabBar from "./components/tabBar";
import {useState } from "react";

function ItemPage({ shopid }) {
  let [newItem, setNewItem] = useState([]);
  let [virgin, fuck] = useState("yes");
  function itemChange(data){
    setNewItem(data);
  }

  if (virgin === "yes"){
    fetch("http://localhost:9000/shopitem/id", {
      method: "POST",
      body: JSON.stringify({ val: shopid }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => {
      setNewItem(res);
    });
  fuck("hard");
  }


 

  return (
    <>
      <TabBar shopid={shopid} itemChange={itemChange}/>
      <Items items={newItem} />
    </>
  );
}
export default ItemPage;
