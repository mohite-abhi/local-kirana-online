import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route , Switch } from "react-router-dom";

import page0 from "./App0";
import App from './App';
import page2 from "./App3";

ReactDOM.render(
  <BrowserRouter>
  <switch>
  <React.StrictMode>
    <Route exact path="/" component={page0}/>
    <Route path="/shop" component = {App} />
    <Route path="/item" component = {page2} />
  </React.StrictMode>
  </switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
