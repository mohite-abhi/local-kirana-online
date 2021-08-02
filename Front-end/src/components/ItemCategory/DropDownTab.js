import React from "react";
import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import Button from "@material-ui/core/Button";

import "@szhsin/react-menu/dist/index.css";

function Dropdown({ menuName, menuItems, shopid, itemChange }) {

  let showItems = function (value) {
    let itemCategory = menuItemsList[value].slice(0, 24);
    // alert(this.shopid);
    fetch("https://local-kirana-online-backend.herokuapp.com/subcategory", {
      method: "POST",
      body: JSON.stringify({ itemCategory: itemCategory, shopId: shopid }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        itemChange(res);
      });
  };

  let menuItemsList = Object.keys(menuItems);
  let menuItemsHtml = Object.keys(menuItems).map((element, i) => (
    <MenuItem onClick={(e) => showItems(i)}  >{element.slice(25)}</MenuItem>
  ));

  return (
    <Menu
      menuButton={
        <Button variant="contained" color="primary" style={{"min-width":"fit-content", margin:"1px"}} >
          {menuName}
        </Button>
      }
      position="static"
    >
      {menuItemsHtml}
    </Menu>
  );
}

export default Dropdown;
