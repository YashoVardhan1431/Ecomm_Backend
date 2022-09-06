const CategoryController = require('../controllers/category.controller');
const validator = require('../middleware/requestValidator');
const routes = (app) => {
    app.get('/ecomm/api/v1/categories', CategoryController.getAllCategories);
    app.post('/ecomm/api/v1/categories', validator.validateCategoryCreationRequest, CategoryController.createCategory);
    app.delete('/ecomm/api/v1/categories/:id', CategoryController.deleteCategory);
    app.get('/ecomm/api/v1/categories/:id', CategoryController.getCategory);
    app.put('/ecomm/api/v1/categories/:id', CategoryController.updateCategory);

}
module.exports = routes;
