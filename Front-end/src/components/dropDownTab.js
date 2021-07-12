import React from "react";
import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import Button from '@material-ui/core/Button';
import "@szhsin/react-menu/dist/index.css";

export default function dropdown(props) {
  let menuItems = [];
  for (var element in props.menuItems) {
    if (props.menuItems[element].length !== 0) {
      let menuItemSubitems = [];
    props.menuItems[element].forEach(subElement => {
        menuItemSubitems.push(<MenuItem>{subElement}</MenuItem>);
    });
      menuItems.push(<SubMenu label={element}>{menuItemSubitems}</SubMenu>);
    } else {
      menuItems.push(<MenuItem>{element}</MenuItem>);
    }

  }
  return (
    <Menu
      menuButton={
      <Button variant="contained" color="primary">
  {props.menuName}
</Button>
      }
      position="static"
    >
      {menuItems}
    </Menu>
  );
}
