const UserController = require('../controllers/user.controller');


module.exports = (app) => {

  app.get("/api/User", UserController.allUsers);

  app.get("/api/User/jwt", UserController.oneUser);

  app.put("/api/User/:id", UserController.updateUser);

  app.post("/api/User", UserController.createUser);

  app.delete("/api/User/:id", UserController.deleteUser);

  app.post("/api/User/register", UserController.registerUser)

  app.post("/api/User/login", UserController.loginUser)

  app.get("/api/User/logout", UserController.logoutUser)

}