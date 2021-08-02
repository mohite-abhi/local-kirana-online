//import './App.css';
import React, { useState, Fragment } from "react";
import Items from "../components/Item/Items";

import TabBar from "../components/ItemCategory/TabBar";

import Checkout from "../components/Checkout/Checkout";
import { SideCartBlock } from "../components/SideCart/SideCartBlock";
import Header from "../components/Fixed/Header";
import Media from "react-media";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const syncCartWithLocalStorage = () => {
  let ourCart = {};
  Object.entries(localStorage).map((item) => {
    if (item[0].length === 24) {
      ourCart[item[0]] = JSON.parse(item[1]);
    }
  });
  // alert(JSON.stringify(ourCart));
  // reloadCartItems(ourCart);
  return ourCart;
};

function loadSave(localVarName, toSave) {
  let localItem = localStorage.getItem(localVarName);
  if (localItem == null || (localItem !== toSave && toSave !== "")) {
    localStorage.setItem(localVarName, toSave);
    return toSave;
  } else {
    return localItem;
  }
}

function ItemPage({ shopid }) {
  let [newItem, setNewItem] = useState([]);
  let [cartItems, reloadCartItems] = useState(syncCartWithLocalStorage());
  let [initializing, initialization] = useState("yes");
  let [newItemBackup, setNewItemBackup] = useState([]);
  let [userInfo, setUserInfo] = useState({});
  let [smallCart, setSmallCart] = useState("hidden");
  let history = useHistory();
  let { path, url } = useRouteMatch();
  let shopidLoaded = loadSave("shopid", shopid);

  const goCheckout = () => {
    history.push(`${url}/checkout`);
  };

  const toggleSmallCart = () => {
    if (smallCart === "visible") {
      setSmallCart("hidden");
    } else {
      setSmallCart("visible");
    }
    // alert("hello")
  };

  // syncCartWithLocalStorage(reloadCartItems);
  function itemChange(data) {
    setNewItem(data);
    if (data.length > newItemBackup.length) {
      setNewItemBackup(data);
    }
  }

  if (initializing === "yes") {
    fetch("https://local-kirana-online-backend.herokuapp.com/shopitem/id", {
      method: "POST",
      body: JSON.stringify({ val: shopidLoaded }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        itemChange(res);
      });
    initialization("done");
  }

  const searchButtonHandler = (search) => {
    let filteredList = [];
    // alert(val);
    newItemBackup.map((item) => {
      if (
        item.itemName.toLowerCase().includes(search.toLowerCase()) ||
        item.itemDesc.toLowerCase().includes(search.toLowerCase())
      ) {
        filteredList.push(item);
      }
    });
    // alert(JSON.stringify(filteredList));
    // alert(JSON.stringify(newItemBackup));
    itemChange(filteredList);
  };

  return (
    <Switch>
      <Route exact path={path}>
        <Header searchBar={true} searchButtonHandler={searchButtonHandler} />
        <div className="row mw-100">
          <TabBar shopid={shopidLoaded} itemChange={itemChange}></TabBar>
          <div></div>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <IconButton
                    aria-label="cart"
                    onClick={() => toggleSmallCart()}
                  >
                    <StyledBadge
                      badgeContent={Object.keys(cartItems).length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                )}
                {matches.medium && (
                  <IconButton
                    aria-label="cart"
                    onClick={() => toggleSmallCart()}
                  >
                    <StyledBadge
                      badgeContent={Object.keys(cartItems).length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        <div className="row mw-100">
          <Items
            items={newItem}
            cartItems={cartItems}
            reloadCartItems={reloadCartItems}
          />
          <SideCartBlock
            items={cartItems}
            reloadCartItems={reloadCartItems}
            goCheckout={goCheckout}
            smallCart={smallCart}
            toggleSmallCart={toggleSmallCart}
          />
        </div>
      </Route>
      <Route path={`${path}/checkout`}>
        <Header />
        <Checkout
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          cartItems={cartItems}
        />
      </Route>
    </Switch>
  );
}
export default ItemPage;
