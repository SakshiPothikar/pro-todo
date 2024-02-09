const todo = require("../model/todo")

exports.getTodos = async (req, res) => {
    try {
        const result = await todo.find()
        res.status(200).json({ message: "fetch success", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wring" })
    }
}

exports.addTodo = async (req, res) => {
    try {
        await todo.create(req.body)
        res.status(201).json({ message: "add todo success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wring" })
    }
}

exports.updateTodos = async (req, res) => {
    await todo.findByIdAndUpdate(req.params.id, req.body)
    try {
        res.status(201).json({ message: "upadate todo success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wring" })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        await todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "delete success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wring" })
    }
}