import player from "../models/Player.js";

class PlayerController {

    static async getRanking(req, res) {
        try {
            const ranking = await player.find({}).sort({ pontos: -1 })
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.status(200).json(ranking)

        } catch (err) {
            res.status(500).json({ message: `Internal server error, ${err}` })
        }
    }

    static async postScore(req, res) {
        try {
            const { nome, pontos } = req.body;
            const userAgent = req.headers['user-agent'];

            if (userAgent && (userAgent.includes('Postman') || userAgent.includes('curl'))) {
                return res.status(403).json({ message: 'Requisições não autorizadas' });
            }

            if (!nome || !pontos) {
                return res.status(400).json({ message: "Missing required fields" })
            }

            const jogador = new player({ nome, pontos });
            await jogador.save();

            return res.status(201).json({ message: "Pontuação cadastrada!" })

        } catch (err) {
            return res.status(500).json({ message: `Internal server error, ${err}` })
        }
    }

};

export default PlayerController;