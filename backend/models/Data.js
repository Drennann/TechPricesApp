import mongoose, { Schema, model } from "mongoose";

const dataSchema = new Schema({
    input: {
        type: String,
        trim: true
    },
    value: {
        type: [Object]
    },
    timestamp : {
        type: Number
    }
})

export default mongoose.model("Data", dataSchema);