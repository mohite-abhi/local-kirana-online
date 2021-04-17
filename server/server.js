const mongoStore = require("./mongoStore.js")
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



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

app.listen(port, () => console.log(`Listening on port ${port}`));