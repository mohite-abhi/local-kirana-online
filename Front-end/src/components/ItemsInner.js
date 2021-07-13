import React from "react";

export const ItemsInner = ({ items }) => {
  console.log(items);
  return (
    <div className="container" key={items.sno}>
      <h3 className=" my-3">items List</h3>

      {items.map((item) => {
        return (
          <div key={item._id}>
            <h4>{item.itemName}</h4>
            <p>{item.itemDesc}</p>
          </div>
        );
      })}
    </div>
  );
};
