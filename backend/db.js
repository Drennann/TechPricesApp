import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export let db = mongoose.connect(URI)
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err));