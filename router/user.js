import express from 'express'
import { Users } from '../controller/index.js'
import isAuthUser from '../controller/isAuthUser.js'
const user = express.Router()

user.get('/all', Users.AllUser)
user.get('/me', isAuthUser, Users.user)

export default user