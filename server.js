import app from "./src/app.js";
import conectaNoMongo from "./src/config/db.js";

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, async() => {
    await conectaNoMongo()
    console.log(`Servidor rodando na porta ${PORTA}`);
})
