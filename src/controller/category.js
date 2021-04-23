const slugify = require('slugify');
const Category = require('../models/category')

exports.addCategory = async(req,res)=>{
    try{
        const catObj ={
            name:req.body.name,
            slug:slugify(req.body.name)
        }
        if(req.body.parentId)
        {
            catObj.parentId = req.body.parentId;
        }
        const cat = new Category(catObj);
        const createCategory = await cat.save();
        res.status(201).json({createCategory});
    }
    catch(err)
    {
        res.status(400).json({err})
    }
}

exports.getCategory = async(req,res) =>{
    try{
        const category = await Category.find({});
        res.status(200).send(category);
    }
    catch(err){
        res.status.send(err);
    }

}