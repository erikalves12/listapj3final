const routes = require("express").Router();
const { route } = require("express/lib/application");
const InstruController = require("../controllers/InstruController");

routes.get("/", InstruController.getAll);
routes.get("/cadastro", InstruController.cadastro);
routes.post("/add", InstruController.add);
routes.get("/getById/:id/:method", InstruController.getById);
routes.post("/update/:id", InstruController.update);
routes.get("/remove/:id", InstruController.remove );

module.exports = routes;
