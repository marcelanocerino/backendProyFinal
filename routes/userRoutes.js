const express = require('express')
const router = express.Router()

const {getUserInfo, createUser, updateUser, updateUserToAdmin} = require('../controllers/routes.db.controllers')

router.get("/user/:id", getUserInfo)
router.post("/user/new", createUser)
router.put("/user/update/:id", updateUser)
router.put("/user/updateToAdmin/:id", updateUserToAdmin)

module.exports = router