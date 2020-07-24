//Тоглогчийн ээлжийг хадгалах хувьсагч
var currentPlayer = 0;
// Player 1,2 iin niit tsugluulj bui onoo
var sumOfScores = [0, 0];
// Player 1,2 iin odoo tsugluulj bga onoo
var currentScore = 0;
// Random side of Dice between 1 and 6
var sideOfDice = 0;
sideOfDice = Math.floor(Math.random() * 6 + 1);
// #- ni id gaar ni handaj bui
window.document.querySelector("#score-0").textContent = sideOfDice;
