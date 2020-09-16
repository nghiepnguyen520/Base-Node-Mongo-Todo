const todoModel = require("../models/todo.model");

const TodoService = {};

TodoService.getAllTodosService = async () => {
  return await todoModel.find({});
};

module.exports = TodoService;
