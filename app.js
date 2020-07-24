//Тоглогчийн ээлжийг хадгалах хувьсагч
var currentPlayer = 0;
// Player 1,2 iin niit tsugluulj bui onoo
var sumOfScores = [0, 0];
// Player 1,2 iin odoo tsugluulj bga onoo
var currentScore = 0;
// Random side of Dice between 1 and 6
var sideOfDice = 0;
// #- ni id gaar ni handaj bui

// Buttons
window.document.querySelector(".btn-roll").addEventListener("click", RollDice);
document.querySelector(".btn-new").addEventListener("click", newGame);
// document.querySelector(".btn-hold").addEventListener("click",function (){
//   if (currentPlayer == 0) {
//     sumOfScores =
//     window.document.getElementById("score-0").textContent = ;
//   } else {
//     window.document.getElementById("current-1").textContent = currentScore;
//   }
// })
var dicePng = document.querySelector(".dice");
dicePng.style.display = "none";
function RollDice() {
  sideOfDice = Math.floor(Math.random() * 6 + 1);
  if (sideOfDice != 1) {
    currentScore = currentScore + sideOfDice;
    if (currentPlayer == 0) {
      window.document.getElementById("current-0").textContent = currentScore;
    } else {
      window.document.getElementById("current-1").textContent = currentScore;
    }
  } else {
    if (currentPlayer == 0) {
      document.getElementById("current-0").textContent = "0";
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.add("active");
      currentPlayer = 1;
    } else {
      document.getElementById("current-1").textContent = "0";
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".player-0-panel").classList.add("active");
      currentPlayer = 0;
    }
    currentScore = 0;
  }
  // iluu hurdan ajildag
  dicePng.style.display = "block";
  dicePng.src = "dice-" + sideOfDice + ".png";
}
function newGame() {
  dicePng.style.display = "none";
  document.querySelector(".dice").src = window.document.getElementById(
    "score-0"
  ).textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}
