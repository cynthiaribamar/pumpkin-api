# pumpkin-api
### Esta API é projetada para ranquear as pontuações do jogo de navegador Pumpkin Run.

Contendo apenas um único endpoint /ranking

- Ao fazer um GET a response vem ordenada por pontuação;
- Ao fazer um POST contendo {jogador: {player}, pontos: {score}} uma nova pontuação é registrada