const mongoStore = require("./mongoStore.js")
const express = require('express');
const bodyParser = require('body-parser');
require(".db/conn");
const Customer = require(".models/customers");
const Item = require(".models/items");
const Store = require(".models/shops");



const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



//ex run on browser: http://localhost:5000/api/itemsFromStore?storeName=Dingdong Groceries
app.get('/api/itemsFromStore', (req, res) => {
  mongoStore.Store
        .findOne({storeName:req.query.storeName})
        .populate('itemID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        res.send(item.itemID)
        });
   

});

app.post("/customer",(req,res) => {
  console.log(req.body);
  const user = new Customer(req.body);
  user.save().then( ()=> {
      res.status(201).send(user);
  }).catch( (err) => {
      res.status(400).send(err);
  })
})

app.post("/shop",(req,res) => {
  console.log(req.body);
  const store = new Store(req.body.shop);
  const item = new Item(req.body.item);

  store.save().then( ()=> {
      res.status(201).send(store);
  }).catch( (err) => {
      res.status(400).send(store);
  })

  item.save().then( ()=> {
    res.status(201).send(item);
}).catch( (err) => {
    res.status(400).send(item);
})

})

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));





//ex run on browser: http://localhost:5000/api/storesFromLocation?pin=752030
app.get('/api/storesFromLocation', (req, res) => {
  mongoStore.Location
        .findOne({pin:req.query.pin})
        .populate('storeID')
        .exec(function (err,store) {
        if (err) return handleError(err);
        res.send(store.storeID);
        });
   

});


