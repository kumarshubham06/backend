import Task from "../models/task.js"

const taskController = {
    async create(req, res, next) {
        try {
            const { title, desc } = req.body
            const task = await Task.create({ title, desc, user: req.user })
            res.json({ sucess: true, task })
        } catch (error) {
            return next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id, title, desc, isBoolean } = req.body
            if (!id) return next(404, "User id not found")

            const task = await Task.findOneAndUpdate({ _id: id }, { title, desc, isBoolean }, { new: true })
            if (!task) return next(404, "Task not found")

            res.json({ success: true, message: `Task Updated`, updated: task})

        } catch (error) {
            return next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            console.log("ifd",id)
            if (!id) return next(404, "User id not found")

            const task = await Task.findOneAndDelete({ _id: id })
            if (!task) return next(404, "Task not found")

            res.json({ success: true, message: `Task deleted` })
        } catch (error) {
            return next(error)
        }
    }
}

export default taskController