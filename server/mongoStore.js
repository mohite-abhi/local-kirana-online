
const mongoose = require("mongoose");
require('mongoose-type-url');
const ObjectId = require('mongodb').ObjectID;
//mongoose.connect("mongodb://localhost:27017/kirana", { useNewUrlParser: true , useUnifiedTopology: true }).then( () => console.log("connection successful")).catch( (err) => console.log(err));
//mongodb+srv://root:<password>@cluster0.vbi7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://root:admin@cluster0.vbi7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true }).then( () => console.log("connection successful")).catch( (err) => console.log(err));
const Schema = mongoose.Schema;
const customerDetail= Schema({
    full_name:{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    pin :{
        type: Number,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    house :{
        type: String,
        required: true
    },
    road :{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Customer = new mongoose.model("Customer",customerDetail);

const createDocument=async()=>{

    try{
        const customer_detail1= new Customer(
            {
                full_name:"Sambit Sahoo",
                phone :7541048752,
                pin :751051,
                state :"Odisha",
                city :"Bhubaneswar",
                house :"Kalpana chowk",
                road :"Kalapana road",
            }
        )

        const customer_detail2= new Customer(
            {
                full_name:"Suraj Nayak",
                phone :7974575121,
                pin :105110,
                state :"Telengana",
                city :"Hyderabad",
                house :"Near Playground",
                road :"Playground road",
            }
        )
        const customer_detail3= new Customer(
            {
                full_name:"Krutidipt Sahoo",
                phone :7978400678,
                pin :752030,
                state :"Odisha",
                city :"Balugaon",
                house :"Ashok Nagar Balugaon",
                road :"Lane-2 Ashok Nagar",
            }
        )

        const customer_detail4= new Customer(
            {
                full_name:"Abhishek Mohite",
                phone :7971440678,
                pin :102343,
                state :"Madhya Pradesh",
                city :"Indore",
                house :"Indira nagar",
                road :"Modi marg",
            }
        )

        const customer_detail5= new Customer(
            {
                full_name:"Manish Mohapatra",
                phone :7851257415,
                pin :753578,
                state :"Odisha",
                city :"Rourkela",
                house :"sector-25",
                road :"mamta marg",
            }
        )
        
        const result = await Customer.insertMany([customer_detail1,customer_detail2,customer_detail3,customer_detail4,customer_detail5]); // for inserting multiple documents at a time
        //  const result = await customer_detail.save(); for inserting one document at a time
        console.log(result);
    }

    catch(err){
        console.log(err);
    }
    
}



const getDocument=async()=>{
    try{
        const result=await Customer.find({pin:{$lt:752030}}); // use find method from ss
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
   
}

//getDocument();

const itemSchema= new Schema({
    _id: Schema.Types.ObjectId,
    itemName:{
        type: String,
        required: true
    },
    itemPrice :{
        type: Number,
        required: true
    },
    itemQuantity :{
        type: Number,
        required: true
    },
    url: {
        work: mongoose.SchemaTypes.Url,
        profile: mongoose.SchemaTypes.Url
    }
})


const Item = new mongoose.model("Item",itemSchema);

const createItem=async()=>{
    try{
        const item_detail1= new Item(
            {
                _id: "59ab1b43ea84486fb4ba9ef0",
                itemName:"Amul milk",
                itemPrice :30,
                itemQuantity :250,
                url: "https://www.google.com/"
                
            }
        )
        const item_detail2= new Item(
            {
                _id: "59ab1b43ea84486fb4ba9ef1",
                itemName:"Amul lassi",
                itemPrice :20,
                itemQuantity :200,
                url: "https://www.google.com/"
                
            }
        )

        const result = await Item.insertMany([item_detail1,item_detail2]); // for inserting multiple documents at a time
        //  const result = await customer_detail.save(); for inserting one document at a time
        console.log(result);

    }
        catch(err)
    {
        console.log(err);
    }
    
}

const storeSchema= new Schema({
    storeName:{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    pin :{
        type: Number,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    itemID: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Item' 
    }],
    url: {
        work: mongoose.SchemaTypes.Url,
        profile: mongoose.SchemaTypes.Url
    }
})

const Store = new mongoose.model("Store",storeSchema);

const createStore=async()=>{
    try{
       
        const store_detail1= new Store(
            {
                storeName:"Dingdong Groceries",
                phone :7978400678,
                pin :752030,
                state :"Odisha",
                city :"Bhubaneswar",
                address :"Shaheed Nagar Bhubaneswar",
                url: "https://www.google.com/",
                itemID:["59ab1b43ea84486fb4ba9ef0","59ab1b43ea84486fb4ba9ef1"]
            }
        )

        result = await store_detail1.save(); // for inserting multiple documents at a time
        //  const result = await customer_detail.save(); for inserting one document at a time
        console.log(result);
        Store
        .findOne({storeName:"Dingdong Groceries"})
        .populate('itemID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        console.log(item.itemID);
        });
      
    }

    catch(err)
    {
        console.log(err);
    }
    
}


const locationSchema= new Schema({
    pin :{
        type: Number,
        required: true
    },
    storeID: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Store' 
    }]
})

const Location = new mongoose.model("Location",locationSchema);

const createLocation=async()=>{
    try{
       
        const location_detail= new Location(
            {
                pin :752030,
                storeID:["607ac8708a958823fcab145e","607ac8495be39e3164c4af4e", "607ac8391135de1ce86f4232"]
            }
        )

        result = await location_detail.save(); // for inserting multiple documents at a time
        //  const result = await customer_detail.save(); for inserting one document at a time
        console.log(result);
        Location
        .findOne({pin:752030})
        .populate('storeID')
        .exec(function (err,item) {
        if (err) return handleError(err);
        console.log(item.storeID);
        });
      
    }

    catch(err)
    {
        console.log(err);
    }
    
}


// createDocument();
// createItem();
// createStore();
// createLocation();


module.exports = {Store:Store, Location:Location};





