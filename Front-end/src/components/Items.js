import { ItemsInner } from "./ItemsInner";

import React, { useState } from "react";

function Items({ items }) {
  return <ItemsInner items={items} />;
}

export default Items;
