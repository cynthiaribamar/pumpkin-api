import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    pontos: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true
})

const player = mongoose.model("ranking", playerSchema);

export default player;