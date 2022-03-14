const express = require('express')
const router = express.Router()

const {getTasksFromList, createList, updateList, deleteBoard} = require('../controllers/routes.db.controllers')


router.get("/list/:idList/tasks", getTasksFromList)
router.post("/list/new", createList)
router.put("/list/update/:id", updateList)
router.delete("/list/delete/:id", deleteBoard)

module.exports = router