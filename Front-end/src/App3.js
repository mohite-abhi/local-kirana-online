//import './App.css';
import Items from "./components/Items";
import React from "react";
import TabBar from "./components/tabBar";

function App3({ items }) {
  return (
    <>
      <TabBar />
      <Items items={items} />
    </>
  );
}
export default App3;
