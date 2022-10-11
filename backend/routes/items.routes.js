import { Router } from "express";
import Data from "../models/Data.js";
import {getProducts} from "../controllers/items.controllers.js";

const itemRouter = Router();

itemRouter.get("/:id", async (req, res) =>{
    try{
        let {id} = req.params
        id = id.toLowerCase().trim();
        const haydatos = await Data.find({input: id});
        if(haydatos.length > 0 && haydatos[0].timestamp + 1000*2*24*60*60> Date.now()){
            res.json({data:haydatos})
        }else{
            const tmp = await getProducts(id);
            const newData = new Data({
                timestamp: Date.now(),
                input: id,
                value: tmp
            })
            await newData.save();
            res.json({data: [newData]});
        }
    }catch(e){
        res.json(e);
    }
})

export default itemRouter;
