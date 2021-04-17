const express = require('express');
require("./dbs/conn");
const Customer = require("./models/customers");
const Item = require("./models/items");
const Store = require("./models/shops");


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.post("/customer", async(req,res) => {
  try{
  console.log(req.body);
  const user = new Customer(req.body);
  const createUser = await user.save();
  res.status(201).send(createUser);
  }
  catch(err)
  {
    res.status(400).send(err);
  }
  
})

app.post("/shop",async(req,res) => {
  try{
    console.log(req.body.shop);
    console.log("hello");
    console.log(req.body.item);
    const store = new Store(req.body.shop);
    //const item = new Item(req.body.item);
    const createStore = await store.save();
    res.status(201).send(createStore);
    const createItem = await Item.insertMany(req.body.item);
    res.status(201).send(createItem);
  }
  catch(err){
    res.status(400).send(err);
  }
})

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));





