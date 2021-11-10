/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let cardGenerator = () => {
  document.body.style.background = "black";

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

  if (suit == "♥" || suit == "♦") {
    document.querySelector("#top-icon").style.color = "red";
    document.querySelector("#bottom-icon").style.color = "red";
  } else {
    document.querySelector("#top-icon").style.color = "black";
    document.querySelector("#bottom-icon").style.color = "black";
  }

  document.querySelector("#top-icon").innerHTML = suit;
  document.querySelector("#bottom-icon").innerHTML = suit;
  document.querySelector("#number").innerHTML = number;

  //specify card's height/width

  // let lessWidth = document.querySelector("#lessWidth");

  // let style = window.getComputedStyle(lessWidth, null).getPropertyValue("less");
  // let currentSize = parseFloat(style);

  // let card = (document.getElementsByClassName("card").style.height =
  //   currentSize + 1 + "px");
};

let timer = () => {
  let timeleft = 10;

  let downloadTimer = setInterval(() => {
    if (timeleft <= 0) {
      cardGenerator();
    }
    if (timeleft == 0) {
      clearInterval(downloadTimer);
    }

    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  }, 1000);
};

let button = () => {
  let generatesNewCard = document.querySelector("#cardChanger");

  generatesNewCard.addEventListener("click", function() {
    cardGenerator();
  });
};

window.onload = function() {
  cardGenerator();
  button();
  timer();
};
