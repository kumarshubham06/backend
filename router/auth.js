import express from 'express'
import { Auth } from '../controller/index.js'

const auth = express.Router()

auth.post('/register', Auth.register)
auth.post('/login', Auth.login)
auth.post('/logout', Auth.logout)

export default auth