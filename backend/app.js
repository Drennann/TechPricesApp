import express from "express";
import morgan from "morgan";
import dataRouter from "./routes/data.routes.js";
import itemRouter from "./routes/items.routes.js";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/items/", itemRouter);
app.use("/api/data", dataRouter);

app.use(express.static( join(__dirname, "../frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../frontend/build/index.html"))
})

export default app;