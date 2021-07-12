const slugify = require('slugify');
const Category = require('../models/category')

function createCategories(categories,parentId=null)
{
    const categoryList= [];
    let category;
    if(parentId== null)
    {
        category = categories.filter(cat => cat.parentId == undefined);
    }
    else{
        category = categories.filter(cat=> cat.parentId == parentId);
    }

    for(let cate of category)
    {
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            slug:cate.slug,
            children: createCategories(categories,cate._id)

        })
    }

    return categoryList;
}
 
exports.addCategory = async(req,res)=>{
    try{
        const catObj ={
            name:req.body.name,
            slug:slugify(req.body.name)
        }
        // if(req.body.parentId)
        // {
        //     catObj.parentId = req.body.parentId;
        // }
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
        const categories = await Category.find({});

        if(categories)
        {
            const categoryList = createCategories(categories);
            res.status(200).send(categoryList);
        }
    }
    catch(err){
        res.status.send(err);
    }

} 