import express from "express";
import PlayerController from "../controllers/playerController.js";

const routes = express.Router();

routes.get("/", (req, res) => res.status(200).json("Pumpkin Api"))

routes.get("/ranking", PlayerController.getRanking);

routes.post("/ranking", PlayerController.postScore);

export default routes;