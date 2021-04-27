//import './App.css';
import React from "react";
import Header from "./components/header";
import Cards from "./components/cards";

function App1({ stores }) {
  return (
    <>
      <Header />
      <Cards stores={stores} />
    </>
  );
}
export default App1;
