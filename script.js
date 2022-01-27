"use strict";

let secureNumber;
let score = 20;
let highScore = 0;
const guesNumberField = document.getElementById("guesNumber")

function setSecureNumber() {
   secureNumber = Number(Math.trunc(Math.random() * 20) + 1);
}

setSecureNumber();

document.querySelector(".check-btn").addEventListener("click", function () {
   const guesNumber = Number(guesNumberField.value);
   console.log("Highscore:", highScore, " Score:", score, "secureNumber:", secureNumber);
   if (!guesNumber) {
      setContent(".message", "😒 No number!");
   } else if (guesNumber === secureNumber) {
      this.classList.add("disabled");
      guesNumberField.disabled = true;
      setContent(".message", "👌 Correct Number!");
      setBodyBg("green");
      setWidth("6rem");
      setContent(".secure-number", secureNumber);
      if (highScore < score) {
         highScore = score;
         setContent(".highscore", highScore);
      }
   } else if (guesNumber !== secureNumber) {
      if (score > 1) {
         setContent(".message", guesNumber < secureNumber ? "📉 To Low" : "📈 To High");
         score--
         setContent(".score", score);
      } else {
         setContent(".message", "🤦‍♂️ You losed the game!");
         setBodyBg("#700101");
      }
   }
});

document.querySelector(".reset-btn").addEventListener("click", function () {
   document.querySelector(".check-btn").classList.remove("disabled");
   guesNumberField.disabled = false;
   setSecureNumber()
   guesNumberField.value = '';
   setBodyBg("black");
   setContent(".secure-number", "?")
   setContent(".message", "Start guessing...");
   score = 20;
   setContent(".score", score);
   setWidth("3rem");
});

function setContent(selector, text) {
   document.querySelector(selector).textContent = text;
}
function setBodyBg(bg) {
   document.querySelector("body").style.backgroundColor = bg;
}
function setWidth(wdt) {
   document.querySelector(".secure-number").style.width = wdt;
}
