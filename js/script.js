var section = document.createElement("section");
section.className = "memory-game";
var memoryCard = document.createElement("div");
memoryCard.className = "memory-card";
memoryCard.setAttribute('data-framework', 'angular');
var fontFace = document.createElement("IMG");
fontFace.className = "font-face";
fontFace.src = "img/angular.svg";
var backFace = document.createElement("IMG");
backFace.className = "back-face";
backFace.src = "img/js-badge.svg";


var memoryCard2 = document.createElement("div");
memoryCard2.className = "memory-card";
memoryCard2.setAttribute('data-framework', 'aurelia');
var fontFace2 = document.createElement("IMG");
fontFace2.className = "font-face";
fontFace2.src = "img/aurelia.svg";
var backFace2 = document.createElement("IMG");
backFace2.className = "back-face";
backFace2.src = "img/js-badge.svg";


var memoryCard3 = document.createElement("div");
memoryCard3.className = "memory-card";
memoryCard3.setAttribute('data-framework', 'backbone');
var fontFace3 = document.createElement("IMG");
fontFace3.className = "font-face";
fontFace3.src = "img/backbone.svg";
var backFace3 = document.createElement("IMG");
backFace3.className = "back-face";
backFace3.src = "img/js-badge.svg";


var memoryCard4 = document.createElement("div");
memoryCard4.className = "memory-card";
memoryCard4.setAttribute('data-framework', 'aurelia');
var fontFace4 = document.createElement("IMG");
fontFace4.className = "font-face";
fontFace4.src = "img/aurelia.svg";
var backFace4 = document.createElement("IMG");
backFace4.className = "back-face";
backFace4.src = "img/js-badge.svg";


var memoryCard5 = document.createElement("div");
memoryCard5.className = "memory-card";
memoryCard5.setAttribute('data-framework', 'angular');
var fontFace5 = document.createElement("IMG");
fontFace5.className = "font-face";
fontFace5.src = "img/angular.svg";
var backFace5 = document.createElement("IMG");
backFace5.className = "back-face";
backFace5.src = "img/js-badge.svg";


var memoryCard6 = document.createElement("div");
memoryCard6.className = "memory-card";
memoryCard6.setAttribute('data-framework', 'backbone');
var fontFace6 = document.createElement("IMG");
fontFace6.className = "font-face";
fontFace6.src = "img/backbone.svg";
var backFace6 = document.createElement("IMG");
backFace6.className = "back-face";
backFace6.src = "img/js-badge.svg";


var memoryCard7 = document.createElement("div");
memoryCard7.className = "memory-card";
memoryCard7.setAttribute('data-framework', 'ember');
var fontFace7 = document.createElement("IMG");
fontFace7.className = "font-face";
fontFace7.src = "img/ember.svg";
var backFace7 = document.createElement("IMG");
backFace7.className = "back-face";
backFace7.src = "img/js-badge.svg";


var memoryCard8 = document.createElement("div");
memoryCard8.className = "memory-card";
memoryCard8.setAttribute('data-framework', 'react');
var fontFace8 = document.createElement("IMG");
fontFace8.className = "font-face";
fontFace8.src = "img/react.svg";
var backFace8 = document.createElement("IMG");
backFace8.className = "back-face";
backFace8.src = "img/js-badge.svg";


var memoryCard9 = document.createElement("div");
memoryCard9.className = "memory-card";
memoryCard9.setAttribute('data-framework', 'vue');
var fontFace9 = document.createElement("IMG");
fontFace9.className = "font-face";
fontFace9.src = "img/vue.svg";
var backFace9 = document.createElement("IMG");
backFace9.className = "back-face";
backFace9.src = "img/js-badge.svg";


var memoryCard10 = document.createElement("div");
memoryCard10.className = "memory-card";
memoryCard10.setAttribute('data-framework', 'react');
var fontFace10 = document.createElement("IMG");
fontFace10.className = "font-face";
fontFace10.src = "img/react.svg";
var backFace10 = document.createElement("IMG");
backFace10.className = "back-face";
backFace10.src = "img/js-badge.svg";


var memoryCard11 = document.createElement("div");
memoryCard11.className = "memory-card";
memoryCard11.setAttribute('data-framework', 'ember');
var fontFace11 = document.createElement("IMG");
fontFace11.className = "font-face";
fontFace11.src = "img/ember.svg";
var backFace11 = document.createElement("IMG");
backFace11.className = "back-face";
backFace11.src = "img/js-badge.svg";


var memoryCard12 = document.createElement("div");
memoryCard12.className = "memory-card";
memoryCard12.setAttribute('data-framework', 'vue');
var fontFace12 = document.createElement("IMG");
fontFace12.className = "font-face";
fontFace12.src = "img/vue.svg";
var backFace12 = document.createElement("IMG");
backFace12.className = "back-face";
backFace12.src = "img/js-badge.svg";

section.appendChild(memoryCard);
section.appendChild(memoryCard2);
section.appendChild(memoryCard3);
section.appendChild(memoryCard4);
section.appendChild(memoryCard5);
section.appendChild(memoryCard6);
section.appendChild(memoryCard7);
section.appendChild(memoryCard8);
section.appendChild(memoryCard9);
section.appendChild(memoryCard10);
section.appendChild(memoryCard11);
section.appendChild(memoryCard12);

memoryCard.appendChild(fontFace);
memoryCard.appendChild(backFace);

memoryCard2.appendChild(fontFace2);
memoryCard2.appendChild(backFace2);

memoryCard3.appendChild(fontFace3);
memoryCard3.appendChild(backFace3);

memoryCard4.appendChild(fontFace4);
memoryCard4.appendChild(backFace4);

memoryCard5.appendChild(fontFace5);
memoryCard5.appendChild(backFace5);

memoryCard6.appendChild(fontFace6);
memoryCard6.appendChild(backFace6);

memoryCard7.appendChild(fontFace7);
memoryCard7.appendChild(backFace7);

memoryCard8.appendChild(fontFace8);
memoryCard8.appendChild(backFace8);

memoryCard9.appendChild(fontFace9);
memoryCard9.appendChild(backFace9);

memoryCard10.appendChild(fontFace10);
memoryCard10.appendChild(backFace10);

memoryCard11.appendChild(fontFace11);
memoryCard11.appendChild(backFace11);

memoryCard12.appendChild(fontFace12);
memoryCard12.appendChild(backFace12);
document.body.append(section);

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
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
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));