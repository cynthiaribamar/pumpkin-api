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

const routes = async (app) => {
    await conectaNoMongo();

    // Middleware
    app.use(cors());

    app.use(
        rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
        })
    );

    app.route("/").get((req, res) => res.status(200).send("Pumpkin Api"));

    // Rotas de ranking
    app.use(express.json(), ranking);
};

export default routes;