import React, { useState } from "react";
//Ingredients needed
import ItemIndividual from "./ItemIndividual.js";


// imported by Front-end/src/ItemPage.js
export const SideCartBlock = ({items, reloadCartItems, goCheckout}) => {
  let calculateTotalPrice = () =>
  {
    let total = 0;
    Object.entries(items).map((item) => {
      total += item[1].itemPrice * item[1].itemQty;
    });
    // alert(JSON.stringify(items["60ec16388ea9c10f4882100f"].itemPrice));
    return total;
  };
  

  return (
    <>
    <div className="col-sm-3 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Cart</span>
        <span className="badge badge-secondary badge-pill">₹ {calculateTotalPrice()}</span>
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
              clickHandler={(type, value) => {
                // alert(JSON.stringify(type));
                //If the value is true, then we increment
                let ourCart = {}
                Object.entries(localStorage).map((item)=>{
                  if (item[0].length === 24){
                    ourCart[item[0]] = JSON.parse(item[1]);
                  }
                })
                let fetchItem = {}
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

                // this.checkoutPageToggler(false);
              }}
            />
          );
        })}
        {/* <li className="list-group-item d-flex justify-content-between bg-light">
          <span>Total</span>
          <strong>{"total"}$</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <button type="button" className={classesButtonSave} onClick={() => {if(props.checkoutEnabled && props.savingEnabled){props.saveHandler();}}}>Save Pizza</button>
        </li>
        <li className="list-group-item d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={props.toggleLoadWindow}>Load pizza</button>
        </li> */}
        <li>
          {/* <button>Checkout</button> */}
           <button onClick = {()=>goCheckout()}>Checkout</button>
        </li>
      </ul>
      {/* <p className="notificationSaving" style={color}>
        {text}
      </p> */}
    </div>
    </>
  );
};

