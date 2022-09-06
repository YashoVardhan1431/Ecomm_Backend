const AuthController = require('../controllers/auth.controller');

const routes = (app) =>{
    app.post('/ecomm/signup',AuthController.signup);
    app.post('/ecomm/signin', AuthController.signin);
}
module.exports = routes;