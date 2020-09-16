const express = require("express");
const routerTodo = require("./todo.routes");

const apiRoute = express();

apiRoute.use("/todo", routerTodo);

module.exports = apiRoute;
