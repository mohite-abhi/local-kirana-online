const express = require("express");
require("./dbs/conn");
const Customer = require("./models/customers");
const Item = require("./models/items");
const Category = require("./models/category")
const Store = require("./models/shops");
const Location = require("./models/location");
const userRoutes = require("./routes/auth");
const testApi = require("./routes/testapi");
const cors = require("cors");
const objpn = null;
//const sendpin = require('./routes/sendp');
const adminRoutes = require('./routes/admin/auth');
const env = require('dotenv');
const categoryRoutes=require('./routes/category');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const axios = require('axios');
const shopRoutes = require('./routes/shop')


env.config();
const app = express();
//const port = process.env.PORT || 9000;
const port = process.env.PORT || 3000;    

 

app.use(express.json());
app.use(cors());
//app.use(express.static('index.js'));
app.use('',userRoutes);
app.use('',adminRoutes);
app.use('',categoryRoutes);
app.use('',itemRoutes);
app.use('',cartRoutes);
app.use('',shopRoutes);

app.post("/customer", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Customer(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/storesFromLocation", function (req, res) {
  console.log(req.body);
  console.log(typeof req.body);
  res.send("API working properly");
  const storeData = Store.find({ pin: Number(req.body.value) }).exec(function (
    err,
    storeData
  ) {
    if (err) return handleError(err);
    console.log(storeData);
  });

  //console.log(storeData);
  res.status(201).json({ storeData });
});

app.post("/shop", async (req, res) => {
  try {
    // var pin = req.body.value;
    //console.log("pin = "+pin);
    console.log(req.body.shop);
    console.log("hello");
    console.log(req.body.item);
    const store = new Store(req.body.shop);
    const createStore = await store.save();
    res.status(201).send(createStore);
    //const createItem = await Item.insertMany(req.body.item);
    //res.status(201).send(createItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// app.post("/storesFromLocations", async (req, res) => {
//   try {
//     console.log(req.body);
//     const storeData = await Store.find({ pin: req.body.value });
//     res.status(201).json({ storeData });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// })


// app.get("/storesFromLocation", (req, res) => {
//         Location
//         .findOne({pin:req.body.pin})
//         .populate('storeID')
//         .exec(function (err,store) {
//         if (err) return handleError(err);
//         res.send(store.storeID);
//         });

// })

// app.get("/shopitem/:id",async(req,res)=>{
//   try{
//       const _id = req.params.id;
//       console.log(_id);
//       const categories = await Category.find({});
//       console.log(categories);
//       Store
//       .findOne({_id})
//       .populate('itemID')
//       .exec(function (err,item) {
//       if (err) return handleError(err);
//       console.log(item.itemIDs);
//       res.send(item.itemIDs);
//       res.status(201).json({categories});
//       });
//   }
//   catch(err)
//   {
//     res.status(400).send(err);
//   }
//   })




  app.get("/searchitem/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const itemName= req.body.itemName;
        console.log(itemName);
        const name = await Item.find({itemName:itemName});
        console.log(name[0]._id);
        const result = await Store.find({$and : [{itemID :{$in :[name[0]._id]}},{_id}] });
        // const search1 = await Store.find({_id});
        // console.log(search1);
        // const search2 = await search1.find({itemID :{$in :[name[0]._id]} }); 
        // console.log(search2);
         res.status(201).send(result);

    }
    catch(err)
    {
      res.status(400).send(err);
    }
    });


    app.get("/subcategory",async(req,res)=>{
      try{
        const itemCategory = req.body.itemCategory;
        const _id = req.body.id;
        const items = await Item.find({itemCategory});
       // console.log(items);

        let itemlist = [];

        for(let item of items)
    {
      const result = await Store.find({$and : [{itemID :{$in :[item._id]}},{_id}] });
      console.log(result);
      if(result.length > 0)
      {
        itemlist.push({
          _id:item._id,
          itemName:item.itemName,
          slug:item.slug,
          itemPrice:item.itemPrice,
          itemDesc:item.itemDesc,
          itemQuantity:item.itemQuantity
      })

      }
        
    }

        res.status(201).send(itemlist);
      }
      catch(err)
      {
        res.status(400).send(err);
      }

    });


app.get("/searchitem/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const itemName = req.body.itemName;
    console.log(itemName);
    const name = await Item.find({ itemName: itemName });
    console.log(name[0]._id);
    const result = await Store.find({
      $and: [{ itemID: { $in: [name[0]._id] } }, { _id }],
    });
    // const search1 = await Store.find({_id});
    // console.log(search1);
    // const search2 = await search1.find({itemID :{$in :[name[0]._id]} });
    // console.log(search2);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/api/ingredientsFromDishName", (req, res) => {
  var result = [];
  const dishName = req.body.dishName;
  var requertUrl =
    "https://api.edamam.com/search?q=" +
    dishName +
    "&app_id=2934760b&app_key=1ebf165ca5f330d5c70bcd44f83aa8ec";
  axios
    .get(requertUrl)
    .then((response) => {
      apiResponse = response.data["hits"][0]["recipe"]["ingredientLines"]
        .join(" ")
        .replace(/([.*+?^=!:${}()|\[\]\/\\\-])/g, " ")
        .split(" ");
      apiResponse.forEach((element) => {
        if (isNaN(element) == true) result.push(element);
      });
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

