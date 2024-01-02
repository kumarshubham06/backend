import JWTService from '../../middleware/JWTService.js'
import customErrHandler from '../../middleware/customError.js'
import User from '../../models/user.js'
import bcrypt from 'bcrypt'
const authController = {
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body

            const isExist = await User.exists({ email })
            if (isExist) return next(customErrHandler.NotFound(404, 'Email Already Exist'))

            const hashPassword = await bcrypt.hash(password, 10)
            await User.create({ name, email, password: hashPassword })

            res.status(201).json({ success: true, message: "User created" })

        } catch (error) {
            return next(error)
        }
    },
    async login(req, res, next) {
        try {
            const { email, password } = req.body

            const userExist = await User.findOne({ email })
            if (!userExist) return next(customErrHandler.NotFound(404, 'Wrong email or password'))

            const verifyPassword = bcrypt.compare(password, userExist.password)
            if (!verifyPassword) return next(customErrHandler.NotFound(404, 'Wrong email or password'))

            const jwtToken = JWTService.sign({ _id: userExist._id })
            res.cookie("token", jwtToken, {
                    maxAge: 900000,
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                })
                .json({ success: true, message: `welcome ${userExist.name}` })

        } catch (error) {
            return next(error)
        }
    },
    async logout(req, res, next) {
        try {
            const { token } = req.cookies
            if (!token) return next(customErrHandler.unAuthorized(401, 'Somthing goes wrong Nice try'))

            const verify = JWTService.verify(token)
            if (!verify._id) return next(customErrHandler.unAuthorized(401, 'Somthing goes wrong Nice try'))

            const user = await User.findOne({ _id: verify._id })
            res.cookie('token', null, {
                httpOnly: true,
                expires: new Date(Date.now()),
                sameSite: "none",
                strict: true,
            }).json({
                success: true,
                message: `${user.name} See you Again Logout Sucessfully`
            })
        } catch (error) {
            return next(error)
        }
    }

}
export default authController