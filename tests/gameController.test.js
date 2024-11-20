const GameController = require("../controllers/gameController");

describe("GameController", () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  test("should start with 0-0 score", () => {
    expect(gameController.getScoreboard()).toBe("Love-All");
  });

  test("should increase Player 1 score", () => {
    gameController.player1Scores();
    expect(gameController.getScoreboard()).toBe("Fifteen-Love");
  });

  test("should return 'Won by Player 1' when Player 1 wins", () => {
    gameController.player1Scores();
    gameController.player1Scores();
    gameController.player1Scores();
    gameController.player2Scores();
    gameController.player1Scores(); 
    expect(gameController.getScoreboard()).toBe("Won by Player 1");
    expect(gameController.isGameComplete()).toBe(true);
  });

  test("should reset the game", () => {
    gameController.player1Scores();
    gameController.resetGame();
    expect(gameController.getScoreboard()).toBe("Love-All");
    expect(gameController.isGameComplete()).toBe(false);
  });
});
