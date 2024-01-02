import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true }
}, { timestamps: true })
export default model('User', userSchema, 'user')