"use strict";

let secureNumber;
let score = 20;
let highScore = 0;

function setSecureNumber() {
   secureNumber = Number(Math.trunc(Math.random() * 20) + 1);
}

setSecureNumber();

document.querySelector(".check-btn").addEventListener("click", function () {
   const guesNumber = Number(document.getElementById("guesNumber").value);
   console.log("Highscore:", highScore, " Score:", score, "secureNumber:", secureNumber);
   if (!guesNumber) {
      setContent(".message", "😒 No number!");
   } else if (guesNumber === secureNumber) {
      this.setAttribute("class", "btn check-btn disabled");
      document.getElementById("guesNumber").disabled = true;
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
         document.querySelector(".message").textContent = guesNumber < secureNumber ? "📉 To Low" : "📈 To High";
         score--
         setContent(".score", score);
      } else {
         setContent(".message", "🤦‍♂️ You losed the game!");
         setBodyBg("#700101");
      }
   }
});

document.querySelector(".reset-btn").addEventListener("click", function () {
   document.querySelector(".check-btn").setAttribute("class", "btn check-btn");
   document.getElementById("guesNumber").disabled = false;
   setSecureNumber()
   document.getElementById("guesNumber").value = '';
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
