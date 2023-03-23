const EcommerceController = require('../controllers/ecommerce.controller');


module.exports = (app) => {

    app.get("/api/Ecommerce", EcommerceController.findAllEcommerces);

    app.get("/api/Ecommerce/:id", EcommerceController.findOneEcommerce);

    app.put("/api/Ecommerce/:id", EcommerceController.updateOneEcommerce);

    app.post("/api/Ecommerce", EcommerceController.createEcommerce);

    app.delete("/api/Ecommerce/:id", EcommerceController.deleteOneEcommerce);

}