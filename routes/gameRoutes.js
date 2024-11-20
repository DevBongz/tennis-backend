const express = require("express");
const GameController = require("../controllers/gameController");

const router = express.Router();
const controller = new GameController(); 

router.post("/player1", (req, res) => {
  controller.player1Scores();
  res.json({
    message: "Player 1 scored a point.",
    scoreboard: controller.getScoreboard(),
    isComplete: controller.isGameComplete(),
  });
});

router.post("/player2", (req, res) => {
  controller.player2Scores();
  res.json({
    message: "Player 2 scored a point.",
    scoreboard: controller.getScoreboard(),
    isComplete: controller.isGameComplete(),
  });
});

router.get("/scoreboard", (req, res) => {
  res.json({
    scoreboard: controller.getScoreboard(),
    isComplete: controller.isGameComplete(),
  });
});

router.post("/reset", (req, res) => {
    controller.resetGame(); 
    res.json({ message: "Game reset!" });
});

module.exports = router;
