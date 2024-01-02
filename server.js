import express from "express";
import router from "./router/index.js";
import { PORT, FRONTEND_URL } from './config/index.js'
import path from "path";
import cookieParser from "cookie-parser";
import { db } from "./database/mongoose.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

const app = express()
db()

app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.set("view engine", "ejs")

app.use('/api/v1', router)
app.use(errorHandler)
app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));



