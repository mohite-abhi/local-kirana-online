const Item = require('../models/items')
const slugify = require('slugify')
exports.createItem = async(req,res)=>{
    //res.status(200).json({file:req.file, body:req.body})

   try{
    const {itemName,itemPrice,itemDesc,itemCategory,itemQuantity} = req.body;
    //let itemPicture;
    //itemPicture = {img: req.file.filename};
    // let itemPicture = [];
    // if(req.files.length > 0)
    // {
    //     itemPicture = req.files.map(file => {
    //         return {img: file.filename}
    //     })
    // }



    const item = new Item({
     itemName,
     slug:slugify(itemName),
     itemPrice,
     itemDesc,
     itemCategory,
     itemQuantity,
     //itemPicture,
     createdBy:req.user._id
    })
 
    const saveItem = await item.save();
    res.status(201).json({saveItem});

   }
   catch(err)
   {
       res.status(400).send(err);
       console.log(err);
   }


}   