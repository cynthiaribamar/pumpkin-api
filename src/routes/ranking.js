import express from "express";
import PlayerController from "../controllers/playerController.js";

const playerRoutes = express.Router();

playerRoutes.get("/ranking", PlayerController.getRanking);

playerRoutes.post("/ranking", PlayerController.postScore);

export default playerRoutes;