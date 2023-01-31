export default function Dice(number, totalScore, roundScore, id) {
  this.number = number;
  this.totalScore = totalScore;
  this.roundScore = roundScore;
  this.id = id;
};

Dice.prototype.Roll = function() {
  this.number = 4; // Math.ceil(Math.random()*6);
  return this.number;
};

Dice.prototype.PlayRound = function () {

};