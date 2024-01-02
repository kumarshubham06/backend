import User from "../models/user.js"
const userController = {
    async user (req, res, next) {
        try {
            res.json({ success: true, data: req.user })
        } catch (error) {
            return next(error)
        }
    },
    async AllUser (req, res, next) {
        try {
            const users = await User.find().select('-__v -updatedAt')
            res.json({ sucess: true, users})
        } catch (error) {
            return next()
        }
    }
}
export default userController
