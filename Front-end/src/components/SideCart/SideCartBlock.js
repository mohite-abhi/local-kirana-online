import React, { useState, Fragment } from "react";
import Media from 'react-media';
//Ingredients needed
import ItemIndividual from "./ItemIndividual.js";

import Button from "@material-ui/core/Button";
// imported by Front-end/src/ItemPage.js
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

 export const SideCartBlock = ({items, reloadCartItems, goCheckout, smallCart, toggleSmallCart}) => {
  let calculateTotalPrice = () =>
  {
    let total = 0;
    Object.entries(items).map((item) => {
      total += item[1].itemPrice * item[1].itemQty;
    });
    // alert(JSON.stringify(items["60ec16388ea9c10f4882100f"].itemPrice));
    return total;
  };
  const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
  }))(Badge);

  
  let myClickHandler = (type, value) => {
    let ourCart = {}
    Object.entries(localStorage).map((item)=>{
      if (item[0].length === 24){
        ourCart[item[0]] = JSON.parse(item[1]);
      }
    })
    if (value) {
      ourCart[type].itemQty++;
      reloadCartItems(ourCart);
      localStorage[type] = JSON.stringify(ourCart[type]);
      //Increment? always
    } else {
      //Decrement? only if not 0!
      if (ourCart[type].itemQty == 1){
        delete ourCart[type];
        reloadCartItems(ourCart);
        localStorage.removeItem(type);
      }
      else if (localStorage[type]) {
        ourCart[type].itemQty--;
        reloadCartItems(ourCart);
        localStorage[type] = JSON.stringify(ourCart[type]);
      }

    }
  }



  let sidebar = (smallerDevice = false) =>{
    let smallStyle = {}
    let backButton = <></>
    if (smallerDevice === true){
      smallStyle = {
        position : "fixed",
        zIndex:2,
        top : 0,
        left : 0, 
        right : 0,
        down : 0,
        width: "100vw",
        height: "100vh",
        padding:"10px",
        backgroundColor : "white",
        visibility: smallCart,
        overflow:"auto"
      }
      backButton = <Button onClick={()=>{toggleSmallCart()}}>Back</Button>
    }
  return <div 
    style = {smallStyle}
  >
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        {backButton}
        <StyledBadge
                      badgeContent={Object.keys(items).length}
                      color="primary"
                    >
        <Button variant="contained" color="primary" onClick = {()=>goCheckout()}>Checkout</Button>
        </StyledBadge>
        <span className="badge badge-secondary badge-pill" style={{backgroundColor:"#3f51b5"}}>₹ {calculateTotalPrice()}</span>
      </h4>
      <ul className="list-group mb-3">
        {Object.entries(items).map((item) => {
          return (
            <ItemIndividual
              name={item[1].itemName}
              price={item[1].itemPrice}
              quantity={item[1].itemQty}
              key={"key"}
              type={item[0]}
              clickHandler={myClickHandler}
            />
          );
        })}
      </ul>
    </div>
  }


  return (
    <div className="col-sm-3 order-md-2 mb-3">
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && sidebar(true)}
            {matches.medium && sidebar(true)}
            {matches.large && sidebar()}
          </Fragment>
        )}
      </Media>
 
    
    </div>
  );
};

