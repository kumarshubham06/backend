import dotenv from "dotenv"
dotenv.config()

export const {
    PORT,
    MONGODB_URL,
    JWT_SECRET_ACCESS_TOKEN,
    RUNNING_STATUS,
    FRONTEND_URL
} = process.env
