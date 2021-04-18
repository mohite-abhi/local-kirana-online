const express = require('express');
require("./dbs/conn");
const Customer = require("./models/customers");
const Item = require("./models/items");
const Store = require("./models/shops");
const Location=require("./models/location")


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


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
    const createStore = await store.save();
    res.status(201).send(createStore);
    const createItem = await Item.insertMany(req.body.item);
    res.status(201).send(createItem);
  }
  catch(err){
    res.status(400).send(err);
  }
})


// app.get("/shop",async(req,res)=>{
// try{
//   console.log(req.body.pin);
//   const storeData=await Store.find({pin:req.body.pin});
//   res.status(201).send(storeData);
// }
// catch(err)
// {
//   res.status(400).send(err);
// }
// })

app.get("/storesFromLocation", (req, res) => {
        Location
        .findOne({pin:req.body.pin})
        .populate('storeID')
        .exec(function (err,store) {
        if (err) return handleError(err);
        res.send(store.storeID);
        });

})


  app.get("/shopitem/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        Store
        .findOne({_id})
        .populate('itemID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        res.send(item.itemID)
        });
    }
    catch(err)
    {
      res.status(400).send(err);
    }
    })

    app.get("/searchitem",async(req,res)=>{
      try{
          const itemName= req.body.itemName;
          console.log(itemName);
          const name = await Item.find({itemName:itemName});
          console.log(name[0]._id);
          const result = await Store.find({itemID :{$in :[name[0]._id]}});
          res.status(201).send(result);

      }
      catch(err)
      {
        res.status(400).send(err);
      }
      })

   
        
   



app.listen(port, () => console.log(`Listening on port ${port}`));





