//import './App.css';
import Items from "../components/Item/Items";
import React from "react";
import TabBar from "../components/ItemCategory/TabBar";
import {useState } from "react";
import Checkout from "../components/Checkout/Checkout";
import {SideCartBlock} from "../components/SideCart/SideCartBlock";
import Header from "../components/Fixed/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";



const syncCartWithLocalStorage = () =>{
  let ourCart = {}
  Object.entries(localStorage).map((item)=>{
    if (item[0].length === 24){
      ourCart[item[0]] = JSON.parse(item[1]);
    }
  })
  // alert(JSON.stringify(ourCart));
  // reloadCartItems(ourCart);
  return ourCart;
}

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
  let { path, url } = useRouteMatch();
  let history = useHistory();
     const goCheckout = () => {
    history.push(`${url}/checkout`);
  };


  let shopidLoaded = loadSave('shopid', shopid);



  let [newItem, setNewItem] = useState([]);
  let [cartItems, reloadCartItems] = useState(syncCartWithLocalStorage());
  let [initializing, initialization] = useState("yes");

  // syncCartWithLocalStorage(reloadCartItems);
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
    <Switch>
      <Route exact path={path}>
        <Header />
        <TabBar shopid={shopidLoaded} itemChange={itemChange}></TabBar>
        <div className="row mw-100">
        <Items items={newItem} cartItems = {cartItems} reloadCartItems={reloadCartItems}/>
        <SideCartBlock items={cartItems} reloadCartItems={reloadCartItems} goCheckout={goCheckout}/>
        </div>
      </Route>
      <Route path={`${path}/checkout`}>
        <Header />
        <Checkout/>
      </Route>
    </Switch>
  );
}
export default ItemPage;
