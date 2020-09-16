const { getAllTodosService } = require("../services/todo.service");

const TodoController = {};

TodoController.getAllTodosController = async (req, res) => {
  try {
    const todos = await getAllTodosService();
    console.log(
      "DEBUG_CODE: TodoController.getAllTodosController -> todos",
      todos
    );
    res.status(200).json({
      todos,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

module.exports = TodoController;
