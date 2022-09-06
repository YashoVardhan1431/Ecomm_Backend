const ProductController = require('../controllers/product.controller');
const AuthValidator = require('../middleware/authValidator');
const routes = (app) => {
    app.get('/ecomm/api/v1/products',AuthValidator.isAuthenticated,ProductController.getProducts),
    app.post('/ecomm/api/v1/products',ProductController.createProduct)
   
}
module.exports = routes;
