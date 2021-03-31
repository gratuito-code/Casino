"use strict";
let die = document.querySelector(".die");
let RollBtn = document.getElementById("roll");
let keepBtn = document.getElementById("keep");
let resetBtn = document.getElementById("reset");
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
let activePlayer = [0, 1];
let active = true;
let playerEl;
let playerPointsEl;
let currentEl;
let overlay;
let switchPlayers = (player, score) => {
  playerEl = document.querySelector(`.player--${player}`);
  playerPointsEl = document.querySelector(`.p-points-${player}`);
  currentEl = document.querySelector(`.c-points-${player}`);
  overlay = document.querySelector(`.overlay--${player}`);
  overlay.classList.toggle("hidden");
  playerPointsEl.textContent = score;
};
//Roll A dice button
RollBtn.addEventListener("click", () => {
  let secNumber = Math.trunc(Math.random() * 6) + 1;
  if (secNumber !== 1) {
    player1CurrentScore += secNumber;
  } else {
    player1CurrentScore = 0;
    player2CurrentScore += secNumber;
  }
  current1El.textContent = player1CurrentScore;
  current2El.textContent = player2CurrentScore;
  document.getElementById("diceImg").src = `images/dice--${secNumber}.png`;
  die.classList.remove("hidden");
});

keepBtn.addEventListener("click", () => {
  player1TotalScore += player1CurrentScore;
  player1PointsEl.textContent = player1TotalScore;
});
