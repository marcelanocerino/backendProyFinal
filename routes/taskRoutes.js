const express = require('express')
const router = express.Router()

const {getTask, createTask, updateTask, deleteTask} = require('../controllers/routes.db.controllers')

router.get("/task/:id", getTask)
router.post("/task/new", createTask)
router.put("/task/update/:id", updateTask)
router.delete("/task/delete/:id", deleteTask)


module.exports = router