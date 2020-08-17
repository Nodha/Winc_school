const cards = document.querySelectorAll('.memory-card');

let hasFlipperCard = false;
let lockBoard = false;
let firstCard, secondCard;

var carArray = [{
  'nodha': ''
}];

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlipperCard) {
    hasFlipperCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framawork === secondCard.dataset.framawork) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);

}

function resetBoard() {
  [hasFlipperCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));

function reset(){
  resetBoard();
}
