import { ItemsInner } from "./ItemsInner";

import React, { useState } from "react";

function Items({ items, reloadCartItems, cartItems }) {
  return <ItemsInner items={items} cartItems = {cartItems} reloadCartItems={reloadCartItems} />;
}

export default Items;
