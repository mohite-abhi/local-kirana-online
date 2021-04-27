import React from "react";
//import "./App.css";
import Slider from "./components/slider";

import Header from "./components/header";
import Pin from "./components/pincodeform";
import { Link, useHistory } from "react-router-dom";

function Page0() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Slider />
      <Pin history={history} />
    </>
    /*<div>
           
            <Link to="/shop"><button>
              Go to Page 2 
            </button>
            </Link>
          </div>*/
  );
}

export default Page0;
