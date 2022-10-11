import express from "express";
import morgan from "morgan";
import dataRouter from "./routes/data.routes.js";
import itemRouter from "./routes/items.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/items/", itemRouter);
app.use("/api/data", dataRouter);

export default app;