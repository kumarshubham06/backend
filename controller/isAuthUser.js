import JWTService from "../middleware/JWTService.js"
import customErrHandler from "../middleware/customError.js"
import User from "../models/user.js"
const isAuthUser = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) return next(customErrHandler.unAuthorized(401, 'Un Authorizedc User'))

        const verifyToken = JWTService.verify(token)
        if (!verifyToken._id) next(customErrHandler.unAuthorized(500, 'Internal Server Error'))

        const verifyUser = await User.findOne({_id: verifyToken._id})
        req.user = verifyUser
        next()
    } catch (error) {
        next(error)
    }

}
export default isAuthUser