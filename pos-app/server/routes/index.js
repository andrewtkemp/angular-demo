const routes = require('express').Router();
const htmlRoutes = require("./html/html-routes.js");
const tables = require("./tables/tables-api.js");
const checks = require("./checks/checks-api.js");
const login = require("./login");
const orders = require("./orders/orders-api.js");

//HTML
routes.use("/", htmlRoutes);

//Authentication
routes.use("/api/login", login);

//Data
routes.use("/api/tables", tables);
routes.use("/api/checks", checks);
routes.use("/api/orders", orders);

module.exports = routes;