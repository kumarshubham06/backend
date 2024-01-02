import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    isBoolean: {
        type: Boolean,
        default: false,
        required: true,
    }
})

export default model('Task', taskSchema, 'task')