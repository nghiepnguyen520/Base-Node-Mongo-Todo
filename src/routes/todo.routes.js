const express = require("express");
const router = express.Router();
const { getAllTodosController } = require("../controllers/todo.controller.js");

router.get("/", getAllTodosController);

module.exports = router;
