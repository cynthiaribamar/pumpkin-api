import app from "./src/app.js";
import conectaNoMongo from "./src/config/db.js";

const PORTA = process.env.PORT;

app.listen(PORTA, async() => {
    await conectaNoMongo()
})
