const express = require('express')
const {  userExists, tokenVerification } = require('./middleware')
const { createUser, loginUser } = require('./userController')
const { createTask, getUserTask } = require('./taskController')
const route = express.Router()

route.post('/createUser',userExists,createUser)
route.post('/login',loginUser)
route.post('/createTask',tokenVerification,createTask)
route.get('/displayTask',tokenVerification,getUserTask)

module.exports = route