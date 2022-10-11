import { Router } from "express";
import {
  deleteData,
  getData,
  getDataByID,
  postData,
  putData,
} from "../controllers/data.controllers.js";

const dataRouter = Router();

dataRouter.get("/", getData);

dataRouter.post("/", postData);

dataRouter.put("/:id", putData);

dataRouter.delete("/:id", deleteData);

dataRouter.get("/:id", getDataByID);

export default dataRouter;
