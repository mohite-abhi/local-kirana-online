import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "./dropDownTab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "fit-content"
  },
}));

function TabBar({shopid, itemChange}) {

  const classes = useStyles();

  // hardcoded categories in a special format, 
  // let dropDownData = {"categoryName":{id<space>name" : []}, ..}
  let dropDownData = {
    "Farm": {
      "60ec07c08469190d84579cb4 Atta & Other Flours" : [],
      "60ec089a8469190d84579cb5 Rice & Other Grains" : [],
      "60ec08b98469190d84579cb6 Dal & Pulses" : [],
      "60ec08d08469190d84579cb7 Edible Oils" : [],
    },
    "Bakery": {
      "60ec090f8469190d84579cb8 Biscuits,Cookies & Cakes" : [],
      "60ec092a8469190d84579cb9 Namkeen" : [],
      "60ec09388469190d84579cba Chips & Wafers" : [],
      "60ec09568469190d84579cbb Chocolates,Candies & Sweets" : [],
    },
    "Bevereges": {
      "60ec09688469190d84579cbc Tea and Coffee" : [],
      "60ec098f8469190d84579cbd Energy and Soft Drink" : [],
      "60ec09b18469190d84579cbe Health Drink & Suppliments" : [],
    },
    "Household": {
      "60ec09f58469190d84579cc0 Cleaning Tool" : [],
      "60ec09d88469190d84579cbf Detergents, Fabric Conditioner & Dishwash" : [],
      "60ec0a108469190d84579cc1 Fresheners & Repellents" : [],

    },
    "Skin & body": {
      "60ec0a4f8469190d84579cc2 Bath & Handwash" : [],
      "60ec0a5d8469190d84579cc3 Hair Care" : [],
      "60ec0a7f8469190d84579cc4 Deodrant & Perfumes" : [],
      "60ec0a8e8469190d84579cc5 Oral Car" : [],
    }
  };


  let DropDownItems = Object.keys(dropDownData).map((dropDown) => (
    <Dropdown menuName={dropDown} menuItems={dropDownData[dropDown]} shopid={shopid}  itemChange={itemChange}/>
   ));


  return <div className={classes.root}>{DropDownItems}</div>;
}


export default TabBar;


