import express from 'express'
import user from './user.js'
import auth from './auth.js'
import task from './task.js'
const router = express.Router()

router.use(user)
router.use(auth)
router.use('/task',task)

export default router