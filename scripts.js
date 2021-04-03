"use strict";
let die = document.querySelector(".die");
let RollBtn = document.getElementById("roll");
let keepBtn = document.getElementById("keep");
let resetBtn = document.getElementById("reset");
let rollWrapper = document.querySelector(".roll-btn");
let keepWrapper = document.querySelector(".keep-btn");
let playerCurrentScore = 0;
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
  if (scores[active] >= 10) {
    document.querySelector(`.p-header-${active}`).textContent = "Winner!!";
    rollWrapper.classList.add("hidden");
    keepWrapper.classList.add("hidden");
    die.classList.add("hidden");
  } else {
    document.getElementById(`current-pts--${active}`).textContent = 0;
    playerCurrentScore = 0;
    switchPlayer();
  }
});

resetBtn.addEventListener("click", () => {
  scores = [0, 0];
  rollWrapper.classList.remove("hidden");
  keepWrapper.classList.remove("hidden");
  document.querySelector(`.p-header-0`).textContent = "Munezero";
  document.querySelector(`.p-header-1`).textContent = "Dodos";
  document.getElementById(`current-pts--0`).textContent = 0;
  document.getElementById(`current-pts--1`).textContent = 0;
  document.querySelector(`.p-points-0`).textContent = "0";
  document.querySelector(`.p-points-1`).textContent = "0";
  switchPlayer();
});
