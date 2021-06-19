/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.body.style.background = "green";

  let randomSuit = ["♦", "♥", "♠", "♣"];

  let randomNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suit = randomSuit[Math.floor(Math.random() * randomSuit.length)];
  let number = randomNumber[Math.floor(Math.random() * randomNumber.length)];

  if (suit === "♦" || suit === "♠" || suit === "♠" || suit === "♣") {
    document.querySelector("#top-icon").style.color = "black";
  } else {
    document.querySelector("#top-icon").style.color = "red";
  }

  if (suit === "♦" || suit === "♠" || suit === "♠" || suit === "♣") {
    document.querySelector("#bottom-icon").style.color = "black";
  } else {
    document.querySelector("#bottom-icon").style.color = "red";
  }

  //   alternative if statement -
  //   if (suit == "♥" || suit == "♦") {
  //     document.querySelector("#top-icon").style.color = "red";
  //     document.querySelector("#bottom-icon").style.color = "red";
  //   } else {
  //     document.querySelector("#top-icon").style.color = "black";
  //     document.querySelector("#bottom-icon").style.color = "black";
  //   }

  document.querySelector("#top-icon").append(suit);
  document.querySelector("#bottom-icon").append(suit);
  document.querySelector("#number").append(number);
};

//   let span = document.createElement("SPAN")
//     generator.appendChild(span)
//   generator.innerHTML = randomSuit;

//   console.log(randomSuit);

// function generateRandomNumber() {
//   let randomNumbers = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];
//   let numbers = Math.floor(Math.random() * randomNumbers.length);

//   return randomNumbers[numbers];
// }
