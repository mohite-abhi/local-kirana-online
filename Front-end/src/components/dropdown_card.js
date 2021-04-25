import React from "react";
import { Link } from "react-router-dom";

import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function dropdown() {
  return (
      <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
          <MenuItem>New File</MenuItem>
          <SubMenu label="Open">
              <MenuItem>index.html</MenuItem>
              <MenuItem>example.js</MenuItem>
              <MenuItem>about.css</MenuItem>
          </SubMenu>
          <MenuItem>Save</MenuItem>
      </Menu>
  );
}


