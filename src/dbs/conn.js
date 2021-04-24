// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://root:admin@cluster0.vbi7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then( () => {
//     console.log("connection is successful");
// }).catch( (err) =>{
//     console.log("no connection");
// })


//comment the below part when u r using cloud db . do not chage the connect link
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/kirana",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log("connection is successful");
}).catch( (err) =>{
    console.log("no connection");
})