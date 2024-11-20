const TennisGame = require("../models/TennisGame");

describe("TennisGame", () => {
  let tennisGame;

  beforeEach(() => {
    tennisGame = new TennisGame();
  });

  test("should start with 0-0 score", () => {
    expect(tennisGame.scoreboard()).toBe("Love-All");
  });

  test("should increase Player 1 score", () => {
    tennisGame.player1Point();
    expect(tennisGame.scoreboard()).toBe("Fifteen-Love");
  });

  test("should return 'Won by Player 1' when Player 1 wins", () => {
    tennisGame.player1Point();
    tennisGame.player1Point();
    tennisGame.player1Point();
    tennisGame.player2Point();
    tennisGame.player1Point(); 
    expect(tennisGame.scoreboard()).toBe("Won by Player 1");
  });

  test("should return 'Won by Player 2' when Player 2 wins", () => {
    tennisGame.player2Point();
    tennisGame.player2Point();
    tennisGame.player2Point();
    tennisGame.player1Point();
    tennisGame.player2Point(); 
    expect(tennisGame.scoreboard()).toBe("Won by Player 2");
  });

  test("should prevent scoring after the game is won", () => {
    tennisGame.player1Point();
    tennisGame.player1Point();
    tennisGame.player1Point();
    tennisGame.player2Point();
    tennisGame.player1Point(); 
    expect(tennisGame.scoreboard()).toBe("Won by Player 1");
    tennisGame.player2Point(); 
    expect(tennisGame.scoreboard()).toBe("Won by Player 1");
  });
});
