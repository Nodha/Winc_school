

let numberGuess = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("wat is je naam?");
}

alert("Ben je klaar voor een spelletje? " + name);

numberGuess = Math.floor(Math.random() * (max - min)) + min;

while (guess !== numberGuess) {
  guess = parseInt(prompt("Kies een nummer"));
  alert("Je koos voor:" + guess);
  if (guess != numberGuess) {
    alert("dit is helaas niet het nummer");
  } else if (guess == numberGuess) {
    alert("Dit was het correcte nummer: " + guess);
    alert("bedankt voor dit kut spel!");
}}
