const express = require('express')
const router = express.Router()

const {getBoardsFromUser, getBoard, getListsFromBoard, createBoard, updateBoard, deleteBoard} = require('../controllers/routes.db.controllers')

router.get("/board/:idUser", getBoardsFromUser)
router.get("/board/:id", getBoard)
router.get("/board/:idBoard/lists", getListsFromBoard)
router.post("/board/new", createBoard)
router.put("/board/update/:id", updateBoard)
router.delete("/board/delete/:id", deleteBoard)

module.exports = router