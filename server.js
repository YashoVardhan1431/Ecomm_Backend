const express = require("express");
const bodyParser = require("body-parser");
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
const app = express();

const Product = require('./models/index').Product;
const Categories = require('./models/index').Categories;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
categoryRoutes(app);
productRoutes(app);
authRoutes(app);
cartRoutes(app);

app.get('/home', async function(req, res){
   const getCategories =await Categories.findAll({include:Product});
   res.json(getCategories);
})
app.listen(configs.PORT, async ()=>{
    console.log("Server running at your PORT",configs.PORT);
});
//(comment after executing once since it resets all the time)
//db.sequelize.sync({alter:true})