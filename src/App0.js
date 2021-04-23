import React from "react";
import './App.css';
import Slider from "./components/slider";

import Header from "./components/header";
import Pin from "./components/pincodeform";
import {Link } from "react-router-dom";

    function Page1() {

        return (
          <>
          <Header/>
          <Slider />
          <Pin/>
          </>
          /*<div>
           
            <Link to="/shop"><button>
              Go to Page 2 
            </button>
            </Link>
          </div>*/
        );

    }
    

    export default Page1;
