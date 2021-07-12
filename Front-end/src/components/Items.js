
import {ItemsInner} from './ItemsInner';

import React, { useState } from 'react';

function Items(){
  const todos = [
  {
    sno: 1,
    title: "Go the market",
    desc: "Let get it done by job1"
  },
  {
    sno: 2,
    title: "Go the market",
    desc: "Let get it done by job2"
  },
  {
    sno: 3,
    title: "Go the market",
    desc: "Let get it done by job3"
  }]
  
  return (
      <ItemsInner todos={todos} />
  );
}

export default Items;
