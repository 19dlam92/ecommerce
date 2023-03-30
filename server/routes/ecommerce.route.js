const EcommerceController = require('../controllers/ecommerce.controller');


module.exports = (app) => {

  app.get("/api/Ecommerce", EcommerceController.allProducts);

  app.get("/api/Ecommerce/:id", EcommerceController.oneProduct);

  app.put("/api/Ecommerce/:id", EcommerceController.updateProduct);

  app.post("/api/Ecommerce", EcommerceController.createProduct);

  app.delete("/api/Ecommerce/:id", EcommerceController.deleteProduct);

  

}