import express from "express";
import ranking from "./ranking.js";
import rateLimit from "express-rate-limit";
import cors from "cors";
import conectaNoMongo from "../config/db.js";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Muitas requisições vindas deste IP. Tente novamente mais tarde."
})

const corsOptions = {
    origin: ["https://pumpkin-run.vercel.app/", "https://site-endless-run-game.vercel.app/"],
    methods: ["GET", "POST"],
    credentials: true
}

const routes = async(app) => {
    await conectaNoMongo()
    app.route("/").get((req, res) => res.status(200).send("Pumpkin Api"));
    app.use(express.json(), ranking, limiter, cors(corsOptions));
};

export default routes;