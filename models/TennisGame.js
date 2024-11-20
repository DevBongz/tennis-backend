class TennisGame {
    constructor() {
      this.scores = [0, 0]; 
      this.scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
      this.complete = false; 
    }
  
    player1Point() {
      if (!this.complete) this.scores[0]++;
    }
  
    player2Point() {
      if (!this.complete) this.scores[1]++;
    }
  
    isComplete() {
      const [p1, p2] = this.scores;
      this.complete = (p1 >= 4 || p2 >= 4) && Math.abs(p1 - p2) >= 2;
      return this.complete;
    }
  
    scoreboard() {
      const [p1, p2] = this.scores;
      if (this.isComplete()) {
        return `Won by Player ${p1 > p2 ? 1 : 2}`;
      }
  
      if (p1 >= 3 && p2 >= 3) {
        if (p1 === p2) return "Deuce";
        return `Advantage Player ${p1 > p2 ? 1 : 2}`;
      }
  
      if (p1 === p2) {
        return p1 < 3 ? `${this.scoreNames[p1]}-All` : "Deuce";
      }
  
      return `${this.scoreNames[p1]}-${this.scoreNames[p2]}`;
    }
  }
  
  module.exports = TennisGame;
  