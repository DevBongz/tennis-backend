class GameController {
    constructor() {
      this.points = [0, 0];
      this.scores = ["Love", "Fifteen", "Thirty", "Forty"];
      this.gameComplete = false;
    }
  
    resetGame() {
      this.points = [0, 0];
      this.gameComplete = false;
    }
  
    player1Scores() {
      if (!this.gameComplete) this.points[0]++;
    }
  
    player2Scores() {
      if (!this.gameComplete) this.points[1]++;
    }
  
    getScoreboard() {
      const [p1, p2] = this.points;
  
      if (p1 >= 3 && p2 >= 3) {
        if (p1 === p2) return "Deuce";
        return `Advantage Player ${p1 > p2 ? 1 : 2}`;
      }
  
      if (p1 >= 4 && p1 - p2 >= 2) {
        this.gameComplete = true;
        return "Won by Player 1";
      }
  
      if (p2 >= 4 && p2 - p1 >= 2) {
        this.gameComplete = true;
        return "Won by Player 2";
      }
  
      return p1 === p2 ? `${this.scores[p1]}-All` : `${this.scores[p1]}-${this.scores[p2]}`;
    }
  
    isGameComplete() {
      return this.gameComplete;
    }
  }
  
  module.exports = GameController;
  