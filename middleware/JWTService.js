import { JWT_SECRET_ACCESS_TOKEN } from "../config/index.js";
import jwt from "jsonwebtoken"

class JWTService {
    static sign(payload, expiry = '1y', secret = JWT_SECRET_ACCESS_TOKEN) {
        return jwt.sign(payload, secret, { expiresIn: expiry })
    }

    static verify(payload, secret = JWT_SECRET_ACCESS_TOKEN) {
        return jwt.verify(payload, secret)
    }

    // static logout(payload, secret = JWT_SECRET_ACCESS_TOKEN){
    //     return jwt
    // }
}
export default JWTService