import express from "express";
import routes from "./src/routes/index.js";
import conectaNoMongo from "./src/config/db.js";

const app = express();

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, async () => {
    await conectaNoMongo()
    routes(app);
    console.log(`Servidor rodando na porta ${PORTA}`);
})


export default app;