const Cart = require('../models/cart');

exports.addItemToCart = (req,res)=>{

    Cart.find({user:req.user._id})
    .exec((error,cart) => {
        if(error) return res.status(400).json({error});
        if(cart.length > 0){
            //if cart exists update it
            //res.status(200).json({message:cart});

            const product = req.body.cartItems.product;
           console.log(product);
           console.log(cart);
            const item = cart.cartItems.find(c => c.product == product);
        //    let item;

        //    for(let c of cart){
        //        console.log(c.cartItems.product);
        //        if(c.cartItems.product == product)
        //        {
        //            item = c.cartItems; 
        //        }
        //    }
          console.log(item);

            if(item!==undefined){
                Cart.findOneAndUpdate({"user":req.user._id,"cartItems.product":product},{
                    "$set":{
                        "cartItems.$":{
                            ...req.body.cartItems,
                            quantity:item.quantity + req.body.cartItems.quantity
                        }
                    }
                })
                .exec((error,_cart)=>{
                    if(error) return res.status(400).json({error});
                    if(_cart)
                    {
                        return res.status(201).json({cart:_cart});
                    }
                })
            }
            else{
                Cart.findOneAndUpdate({user:req.user._id},{
                    "$push":{
                        "cartItems":req.body.cartItems
                    }
                }).exec((error,_cart)=>{
                    if(error) return res.status(400).json({error});
                    if(_cart){
                        return res.status(201).json({cart:_cart});
                    }
                })
            }
        }

        else{
            console.log("hello");
            //if cart does not exist create a new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems:[req.body.cartItems]
            });
        
            cart.save((error,cart)=>{
                if(error) return res.status(400).json({error});
                if(cart){
                    return res.status(201).json({cart});
                }
            });

        }
    })
  
}

