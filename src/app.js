import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".card").innerHTML = genRanNum();
  document.querySelector(".card").classList.add([genRanSuit()]);
};

let genRanNum = () => {
  let number = [
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
  let ranNum = Math.floor(Math.random() * number.length);
  return number[ranNum];
};

let genRanSuit = () => {
  let suit = ["diams", "spade", "hearts", "clubs"];
  let ranSuit = Math.floor(Math.random() * suit.length);
  return suit[ranSuit];
};

function hasClass() {
  let card = document.querySelector(".card");
  if (card.classList.contains("spade")) {
    card.classList.remove("spade");
    document.querySelector(".card").innerHTML = "";
    document.querySelector(".card").innerHTML = genRanNum();
    document.querySelector(".card").classList.add([genRanSuit()]);
    
  } else if (card.classList.contains("clubs")) {
    card.classList.remove("clubs");
    document.querySelector(".card").innerHTML = "";
    document.querySelector(".card").innerHTML = genRanNum();
    document.querySelector(".card").classList.add([genRanSuit()]);
  } else if (card.classList.contains("hearts")) {
    card.classList.remove("hearts");
    document.querySelector(".card").innerHTML = "";
    document.querySelector(".card").innerHTML = genRanNum();
    document.querySelector(".card").classList.add([genRanSuit()]);
  } else if (card.classList.contains("diams")) {
    card.classList.remove("diams");
    document.querySelector(".card").innerHTML = "";
    document.querySelector(".card").innerHTML = genRanNum();
    document.querySelector(".card").classList.add([genRanSuit()]);
  }
}

let btn = document.querySelector(".myBtn");
btn.onclick = function() {
  hasClass();
};
