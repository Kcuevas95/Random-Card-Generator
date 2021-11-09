/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function cardGenerator() {
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

  if (suit == "♥" || suit == "♦") {
    document.querySelector("#top-icon").style.color = "red";
    document.querySelector("#bottom-icon").style.color = "red";
  } else {
    document.querySelector("#top-icon").style.color = "black";
    document.querySelector("#bottom-icon").style.color = "black";
  }

  document.querySelector("#top-icon").append(suit);
  document.querySelector("#bottom-icon").append(suit);
  document.querySelector("#number").append(number);

  // alternative if statement -
  // if (suit === "♦" || suit === "♠" || suit === "♠" || suit === "♣") {
  //   document.querySelector("#top-icon").style.color = "black";
  // } else {
  //   document.querySelector("#top-icon").style.color = "red";
  // }

  // if (suit === "♦" || suit === "♠" || suit === "♠" || suit === "♣") {
  //   document.querySelector("#bottom-icon").style.color = "black";
  // } else {
  //   document.querySelector("#bottom-icon").style.color = "red";
  // }

  //reloads new card

  let generatesNewCard = document.querySelector("#cardChanger");

  generatesNewCard.addEventListener("click", function() {
    window.location.reload();
  });

  //generates new card every ten seconds

  let timeleft = 10;
  let downloadTimer = setInterval(() => {
    if (timeleft <= 0) {
      window.location.reload();
    }

    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  }, 1000);

  //specify card's height/width

  // let lessWidth = document.querySelector("#lessWidth");

  // let style = window.getComputedStyle(lessWidth, null).getPropertyValue("less");
  // let currentSize = parseFloat(style);

  // let card = (document.getElementsByClassName("card").style.height =
  //   currentSize + 1 + "px");
};
