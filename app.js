import express from "express";
import routes from "./src/routes/index.js";

const app = express();

const PORTA = process.env.PORT;

app.listen(PORTA, async () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
})

routes(app);

export default app;