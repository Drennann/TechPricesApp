import dotenv from "./config.js";
import {db} from "./db.js"
import app from "./app.js";

app.listen(process.env.PORT, () => console.log("Server on port", process.env.PORT));