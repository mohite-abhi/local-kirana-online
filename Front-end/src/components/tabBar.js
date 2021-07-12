import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "./dropDownTab";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "fit-content",
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();

  let dropDownData = {
    "category 1": {
      "sub category 1": ["sub sub item 1", "sub sub item 2"],
      "sub category 1.5": [],
      "sub category 1.7": ["sub sub item 3", "sub sub item 4"],
    },
    "category 2": {
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.5": [],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 3": {
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.5": [],
    },
    "category 4": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 5": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 6": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 7": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 8": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 9": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 10": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
    "category 11": {
      "sub category 2.5": [],
      "sub category 2.1": ["sub sub item 5", "sub sub item 6"],
      "sub category 2.8": ["sub sub item 7", "sub sub item 8"],
    },
  };
  let DropDownItems = [];

  for (let dropDown in dropDownData) {
    DropDownItems.push(
      <Dropdown menuName={dropDown} menuItems={dropDownData[dropDown]} />
    );
  }

  return <div className={classes.root}>{DropDownItems}</div>;
}
