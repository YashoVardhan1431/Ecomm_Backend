const CartController = require('../controllers/cart.controller');

const routes = (app)=>{
    app.post('/ecomm/api/v1/addProduct', CartController.addProductToCart);
    app.post('ecomm/api/v1/removeProduct', CartController.removeProductFromCart);
    
}
module.exports = routes;