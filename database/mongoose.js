import mongoose from "mongoose";
import { MONGODB_URL } from "../config/index.js";

export const db = () => {
    mongoose.connect(MONGODB_URL, { dbName: "backend" },)
    const db = mongoose.connection
    db.on('error', () => console.error.bind('db connection error'))
    db.once('open', () => {
        console.log("db connected");
    })
}
