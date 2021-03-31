"use strict";
let die = document.querySelector(".die");
let RollBtn = document.getElementById("roll");
let keepBtn = document.getElementById("keep");
let resetBtn = document.getElementById("reset");
let playerCurrentScore = 0;
let playerTotalScore = 0;
let scores = [0, 0];
let active = 0;

let switchPlayer = () => {
  playerCurrentScore = 0;
  active = active === 0 ? 1 : 0;
  document.querySelector(".overlay--0").classList.toggle("hidden");
  document.querySelector(".overlay--1").classList.toggle("hidden");
}; //Roll A dice button
RollBtn.addEventListener("click", () => {
  let secNumber = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("diceImg").src = `images/dice--${secNumber}.png`;
  die.classList.remove("hidden");
  if (secNumber !== 1) {
    playerCurrentScore += secNumber;
    document.getElementById(
      `current-pts--${active}`
    ).textContent = playerCurrentScore;
  } else {
    document.getElementById(`current-pts--${active}`).textContent = 0;
    playerCurrentScore = 0;
    switchPlayer();
  }
});

keepBtn.addEventListener("click", () => {
  scores[active] += playerCurrentScore;
  document.querySelector(`.p-points-${active}`).textContent = scores[active];
  switchPlayer();
});
