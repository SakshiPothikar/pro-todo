const { getTodos, addTodo, updateTodos, deleteTodo } = require("../controller/todoController")

const { } = require

const router = require("express").Router()

router
    .get("/todo", getTodos)
    .post("/add-todo", addTodo)
    .put("/update-todo/:id", updateTodos)
    .delete("/delete-todo/:id", deleteTodo)

module.exports = router