import mongoose from "mongoose";
import "dotenv/config"

async function conectaNoMongo() {
    mongoose.connect(process.env.DBURI);
    return mongoose.connection;
};

export default conectaNoMongo;

