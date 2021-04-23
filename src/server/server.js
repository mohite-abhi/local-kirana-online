const mongoStore = require("./mongoStore.js")
const express = require('express');

const bodyParser = require('body-parser');
// require(".mongoStore/conn");


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/ingredientsFromDishName', (req, res) => {
  var result = []
  const dishName = req.body.dishName
  var requertUrl = "https://api.edamam.com/search?q="+dishName+"&app_id=2934760b&app_key=1ebf165ca5f330d5c70bcd44f83aa8ec"
  axios.get(requertUrl)
    .then(response => {
        apiResponse = response.data["hits"][0]["recipe"]["ingredientLines"].join(" ").replace(/([.*+?^=!:${}()|\[\]\/\\\-])/g," ").split(" ")
        apiResponse.forEach(element => {
          if (isNaN(element) == true) result.push(element);
        });
        console.log(result);
        res.send(result);
    })
    .catch(error => {
        console.log(error);
    });
   

});


//ex run on browser: http://localhost:5000/api/itemsFromStore?storeName=Dingdong Groceries
app.get('/api/itemsFromStore', (req, res) => {
  mongoStore.Store
        .findOne({storeName:req.body.storeName})
        .populate('itemID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        res.send(item.itemID)
        });
   

});


app.listen(port, () => console.log(`Listening on port ${port}`));

//ex run on browser: http://localhost:5000/api/storesFromLocation?pin=752030
app.get('/api/storesFromLocation', (req, res) => {
  mongoStore.Location
        .findOne({pin:req.body.pin})
        .populate('storeID')
        .exec(function (err,store) {
        if (err) return handleError(err);
        res.send(store.storeID);
        });

});


