//Тоглогчийн ээлжийг хадгалах хувьсагч
var currentPlayer = 0;
// Player 1,2 iin niit tsugluulj bui onoo
var sumOfScores = [0, 0];
// Player 1,2 iin odoo tsugluulj bga onoo
var currentScore = 0;
// Random side of Dice between 1 and 6
var sideOfDice = 0;
// #- ni id gaar ni handaj bui
// dice iin zurag
var dicePng = document.querySelector(".dice");
// togloomiin toloviig hadgalah huvisagch
var isGameOver = false;
var zuger = 1;
// Shideh button darah
window.document
  .querySelector(".btn-roll")
  .addEventListener("click", function () {
    //toglolt duusaagui baival
    if (isGameOver == false) {
      // shoo erguul
      sideOfDice = Math.floor(Math.random() * 6 + 1);
      // herev shoonii tal 1 ees oor baival
      if (sideOfDice != 1) {
        // current score deer shooni taliig nemeh
        currentScore = currentScore + sideOfDice;
        // currentplayer 0 bval current-0 - id-gin utgagiig oorchloh
        if (currentPlayer == 0) {
          document.getElementById("current-0").textContent = currentScore;
        } else {
          window.document.getElementById(
            "current-1"
          ).textContent = currentScore;
        }
      } else {
        // shoonii tal 1 bval toglogch switch hiine
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
      dicePng.style.display = "block"; // dice iin none hiiseng boliulna.
      dicePng.src = "dice-" + sideOfDice + ".png";
    } else {
      // herev isGameOver = true buyu toglolt duussan bval
      setTimeout(function () {
        won();
      }, 200);
    }
  });

// New Game button darah
document.querySelector(".btn-new").addEventListener("click", newGame);
function newGame() {
  gameName();
  dicePng.style.display = "none";
  document.querySelector(".dice").src = window.document.getElementById(
    "score-0"
  ).textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  currentScore = 0;
  sumOfScores = [0, 0];
  isGameOver = false;
}
// Onoogoo avah button darah ued
document.querySelector(".btn-hold").addEventListener("click", function () {
  // toglolt duusaagui baival
  if (isGameOver == false) {
    //0 toglogch bval
    if (currentPlayer == 0) {
      sumOfScores[0] = sumOfScores[0] + currentScore; // niit onoo deer odoogin onoog nemne
      window.document.getElementById("score-0").textContent = sumOfScores[0]; // oorchloltiig haruulna
      window.document.getElementById("current-0").textContent = "0"; // current-iig 0 lene
      // hojih onoond hureegui bval
      if (sumOfScores[0] < 120) {
        currentPlayer = 1;
        //toglogchiin eeljiig solino
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");
        currentScore = 0;
      } else {
        // hojih onoond hursen bval
        isGameOver = true; // togloltiig duusgaad
        setTimeout(function () {
          win();
        }, 150);
      }
    } else {
      // 1-r toglogch bval
      sumOfScores[1] = sumOfScores[1] + currentScore;
      window.document.getElementById("score-1").textContent = sumOfScores[1];
      window.document.getElementById("current-1").textContent = "0";
      if (sumOfScores[1] < 120) {
        currentPlayer = 0;
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");
        currentScore = 0;
      } else {
        isGameOver = true;
        setTimeout(function () {
          win();
        }, 150);
      }
    }
  } else {
    setTimeout(function () {
      won();
    }, 150);
  }
});
dicePng.style.display = "none";
//Togloomiin durem button
document.querySelector(".btn-help").addEventListener("click", function () {
  setTimeout(function () {
    Swal.fire("Тоглоомын дүрэм", durem, "success");
  }, 100);
});
var durem =
  "Дүрэм №1. Нийт оноогоо түрүүлж 120 оноонд хүргэсэн тоглогч хожно. -------------------------------------------------------- " +
  "Дүрэм №2. Таны ээлж эхлэх үед 'ШИДЭХ' товчыг дарж шоогоо шидэн буусан нүдний тоогоор ээлжийн оноогоо цуглуулна ----------------------------------------------------------------" +
  "Дүрэм №3. Цуглуулсан ээлжийн оноогоо 'ОНООГОО АВАХ' товчин дээр дарж нийт оноо дээр нэмэн нөгөө хүнд шидэх эрх өгнө. " +
  "-----------------------------------------------------------------------Дүрэм №4. Хэрэв шооны нүд 1 буусан тохиолдолд ээлжийн оноо устгагдаж нөгөө хүнд шидэх эрх өгнө.------------------------ " +
  "Дүрэм №5. Хожсон тоглогч дараагийн тоглолтыг эхлүүлнэ.-----";
function win() {
  var xd = 1 + currentPlayer;
  Swal.fire({
    title: "----------" + xd + "- р тоглогч яллаа!!!----------",
    text: "",
    imageUrl: "win.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}
function won() {
  var xd1 = 1 + currentPlayer;
  Swal.fire({
    icon: "error",
    title:
      "----" +
      xd1 +
      "-р тоглогч ялж тоглоом дууссан тул шинээр эхлүүлнэ үү--------",
    text: "",
    footer: "",
  });
}
function gameName() {
  Swal.fire({
    title:
      "----Шунал ихтвэл Шулам болно------------Developed by Batkhuleg---------",
    text: "",
    imageUrl: "witch.jpg",
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: "Custom image",
  });
}
