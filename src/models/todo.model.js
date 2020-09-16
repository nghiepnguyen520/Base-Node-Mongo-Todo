const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = Schema({
  name: String,
});

const todoModel = mongoose.model("Todos", todoSchema, "todos");

module.exports = todoModel;
