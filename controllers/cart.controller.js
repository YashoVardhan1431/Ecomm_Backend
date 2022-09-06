const CartService = require('../services/cart.service');

const addProductToCart = async (req,res) =>{
     let cart = await CartService.getCartByUser(req.body.userId, 'creation');
    if(!cart) {
         cart = await CartService.createCart(req.body.userId);
    }
    const response = await CartService.addProductToCart({
        productId: req.body.productId,
        cartId: cart.id    
    })
    if(!response){
        return res.json({
            code: 500,
            success: false,
            message: 'Cannot add product to cart'
        })
    }
    return res.json({
        code: 200,
        success: true,
        message: 'Product added to cart successfully'
    })
}
const removeProductFromCart = async (req,res) =>{
    let cart = await CartService.getCartByUser(req.body.userId, 'creation');
   if(!cart) {
    return res.json({
        code: 500,
        success: false,
        message: 'No product in the cart'
    })
   }
   const response = await CartService.removeProductFromCart({
       productId: req.body.productId,
       cartId: cart.id    
   })
   if(!response){
       return res.json({
           code: 500,
           success: false,
           message: 'Cannot remove product from cart'
       })
   }
   return res.json({
       code: 200,
       success: true,
       message: 'Product from cart successfully'
   })
}
module.exports ={
    addProductToCart,
    removeProductFromCart
}