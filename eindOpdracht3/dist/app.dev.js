"use strict";

var menuIcon = document.querySelector(".hamburger-menu");
var navBar = document.querySelector(".navbar");
menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("change");
}); //red

document.getElementById("red").addEventListener("click", function () {
  setBackgroundColor('red');
  console.log("this has been clicked");
});

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}