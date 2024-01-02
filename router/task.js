import express from 'express'
import { Task } from '../controller/index.js'
import isAuthUser from '../controller/isAuthUser.js'
const task = express.Router()

task.post('/create', isAuthUser, Task.create)
task.put('/', isAuthUser, Task.update)
task.route('/:id').delete(isAuthUser, Task.delete)

export default task