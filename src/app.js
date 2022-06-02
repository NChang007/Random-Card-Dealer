import "bootstrap";
import "./style.css";


window.onload = function() {
  document.querySelector('.card').innerHTML = genRanNum();
  document.querySelector('.card').classList.add([genRanSuit()]);
};


let genRanNum = () => {
  let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let ranNum = Math.floor(Math.random() * number.length);
  return number[ranNum];
};

let genRanSuit = () => {
  let suit = ['diams', 'spade', 'hearts', 'clubs'];
  let ranSuit = Math.floor(Math.random() * suit.length);
  return suit[ranSuit];
};

// let btn = document.querySelector('.myBtn').addEventListener('click'){
//   if()
// };

// function hasClass(){
//   let card = document.querySelector('.card');
//   if($(card).hasClass('spade')){
//     $(card).removeClass('spade');
//     document.querySelector('.card').classList.add([genRanSuit()]);
//   } else if($(card).hasClass('clubs')){
//     $(card).removeClass('clubs');
//     document.querySelector('.card').classList.add([genRanSuit()]);
//   } else if($(card).hasClass('heart')){
//     $(card).removeClass('heart');
//     document.querySelector('.card').classList.add([genRanSuit()]);
//   } else if($(card).hasClass('diams')){
//     $(card).removeClass('diams');
//     document.querySelector('.card').classList.add([genRanSuit()]);
//   } 
// }