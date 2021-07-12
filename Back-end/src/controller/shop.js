const Store = require("../models/shops");
const Item = require("../models/items")
 
 
 exports.getItem = async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(_id);
        Store
        .findOne({_id})
        .populate('itemID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        console.log(item);
        res.send(item.itemID);
        });
    }
    catch(err)
    {
      res.status(400).send(err);
    }
    } 