//Container для кнопок и сообщении уровня(level) и бала.
var socer = document.createElement("div");
socer.className = "socer";

var btn = document.createElement("div");
btn.className = "btn";

var start = document.createElement("input");
start.className = "start";
start.id = "start";
start.value = "Start";
start.setAttribute('type', 'submit');
start.setAttribute('onclick','start()');

var level = document.createElement("div");
level.id = "level";

var bal = document.createElement("div");
bal.id = "bal";


//Container для карточек
var container = document.createElement("div");
container.className = "container";

//Level one
var levelOne = document.createElement("section");
levelOne.className = "memory-game";
levelOne.style.display = "none";

var memoryCard = document.createElement("div");
memoryCard.className = "memory-card";
memoryCard.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace = document.createElement("IMG");
var backFace = document.createElement("IMG");
frontFace.className = "front-face";
backFace.className = "back-face";
frontFace.src = "img/aurelia.svg";
backFace.src = "img/js-badge.svg";

var memoryCard1 = document.createElement("div");
memoryCard1.className = "memory-card";
memoryCard1.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace1 = document.createElement("IMG");
var backFace1 = document.createElement("IMG");
frontFace1.className = "front-face";
backFace1.className = "back-face";
frontFace1.src = "img/aurelia.svg";
backFace1.src = "img/js-badge.svg";


// level Two
var levelTwo = document.createElement("section");
levelTwo.className = "memory-game";
levelTwo.style.display = "none";

var memoryCard2 = document.createElement("div");
memoryCard2.className = "memory-card";
memoryCard2.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace2 = document.createElement("IMG");
var backFace2 = document.createElement("IMG");
frontFace2.className = "front-face";
backFace2.className = "back-face";
frontFace2.src = "img/aurelia.svg";
backFace2.src = "img/js-badge.svg";

var memoryCard3 = document.createElement("div");
memoryCard3.className = "memory-card";
memoryCard3.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace3 = document.createElement("IMG");
var backFace3 = document.createElement("IMG");
frontFace3.className = "front-face";
backFace3.className = "back-face";
frontFace3.src = "img/aurelia.svg";
backFace3.src = "img/js-badge.svg";

var memoryCard4 = document.createElement("div");
memoryCard4.className = "memory-card";
memoryCard4.setAttribute('data-framework','angular');
// IMG for memory-card2
var frontFace4 = document.createElement("IMG");
var backFace4 = document.createElement("IMG");
frontFace4.className = "front-face";
backFace4.className = "back-face";
frontFace4.src = "img/angular.svg";
backFace4.src = "img/js-badge.svg";

var memoryCard5 = document.createElement("div");
memoryCard5.className = "memory-card";
memoryCard5.setAttribute('data-framework','angular');
// IMG for memory-card3
var frontFace5 = document.createElement("IMG");
var backFace5 = document.createElement("IMG");
frontFace5.className = "front-face";
backFace5.className = "back-face";
frontFace5.src = "img/angular.svg";
backFace5.src = "img/js-badge.svg";




//Level Three
var levelThree = document.createElement("section");
levelThree.className = "memory-game";
levelThree.style.display = "none";

var memoryCard6 = document.createElement("div");
memoryCard6.className = "memory-card";
memoryCard6.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace6 = document.createElement("IMG");
var backFace6 = document.createElement("IMG");
frontFace6.className = "front-face";
backFace6.className = "back-face";
frontFace6.src = "img/aurelia.svg";
backFace6.src = "img/js-badge.svg";

var memoryCard7 = document.createElement("div");
memoryCard7.className = "memory-card";
memoryCard7.setAttribute('data-framework','aurelia');
// IMG for memory-card
var frontFace7 = document.createElement("IMG");
var backFace7 = document.createElement("IMG");
frontFace7.className = "front-face";
backFace7.className = "back-face";
frontFace7.src = "img/aurelia.svg";
backFace7.src = "img/js-badge.svg";

var memoryCard8 = document.createElement("div");
memoryCard8.className = "memory-card";
memoryCard8.setAttribute('data-framework','angular');
// IMG for memory-card2
var frontFace8 = document.createElement("IMG");
var backFace8 = document.createElement("IMG");
frontFace8.className = "front-face";
backFace8.className = "back-face";
frontFace8.src = "img/angular.svg";
backFace8.src = "img/js-badge.svg";

var memoryCard9 = document.createElement("div");
memoryCard9.className = "memory-card";
memoryCard9.setAttribute('data-framework','angular');
// IMG for memory-card3
var frontFace9 = document.createElement("IMG");
var backFace9 = document.createElement("IMG");
frontFace9.className = "front-face";
backFace9.className = "back-face";
frontFace9.src = "img/angular.svg";
backFace9.src = "img/js-badge.svg";

var memoryCard10 = document.createElement("div");
memoryCard10.className = "memory-card";
memoryCard10.setAttribute('data-framework','backbone');
// IMG for memory-card3
var frontFace10 = document.createElement("IMG");
var backFace10 = document.createElement("IMG");
frontFace10.className = "front-face";
backFace10.className = "back-face";
frontFace10.src = "img/backbone.svg";
backFace10.src = "img/js-badge.svg";

var memoryCard11 = document.createElement("div");
memoryCard11.className = "memory-card";
memoryCard11.setAttribute('data-framework','backbone');
// IMG for memory-card3
var frontFace11 = document.createElement("IMG");
var backFace11 = document.createElement("IMG");
frontFace11.className = "front-face";
backFace11.className = "back-face";
frontFace11.src = "img/backbone.svg";
backFace11.src = "img/js-badge.svg";





socer.appendChild(btn);
socer.appendChild(level);
socer.appendChild(bal);
btn.appendChild(start);

container.appendChild(levelOne);
levelOne.appendChild(memoryCard);
memoryCard.appendChild(frontFace);
memoryCard.appendChild(backFace);

levelOne.appendChild(memoryCard1);
memoryCard1.appendChild(frontFace1);
memoryCard1.appendChild(backFace1);

container.appendChild(levelTwo);
levelTwo.appendChild(memoryCard2);
memoryCard2.appendChild(frontFace2);
memoryCard2.appendChild(backFace2);

levelTwo.appendChild(memoryCard3);
memoryCard3.appendChild(frontFace3);
memoryCard3.appendChild(backFace3);

levelTwo.appendChild(memoryCard4);
memoryCard4.appendChild(frontFace4);
memoryCard4.appendChild(backFace4);

levelTwo.appendChild(memoryCard5);
memoryCard5.appendChild(frontFace5);
memoryCard5.appendChild(backFace5);

container.appendChild(levelThree);
levelThree.appendChild(memoryCard6);
memoryCard6.appendChild(frontFace6);
memoryCard6.appendChild(backFace6);

levelThree.appendChild(memoryCard7);
memoryCard7.appendChild(frontFace7);
memoryCard7.appendChild(backFace7);

levelThree.appendChild(memoryCard8);
memoryCard8.appendChild(frontFace8);
memoryCard8.appendChild(backFace8);

levelThree.appendChild(memoryCard9);
memoryCard9.appendChild(frontFace9);
memoryCard9.appendChild(backFace9);

levelThree.appendChild(memoryCard10);
memoryCard10.appendChild(frontFace10);
memoryCard10.appendChild(backFace10);

levelThree.appendChild(memoryCard11);
memoryCard11.appendChild(frontFace11);
memoryCard11.appendChild(backFace11);

document.body.append(socer);
document.body.append(container);





if(start){
    var i = 0;
    function start(){
        i++;
        console.log("Level"+i);
        document.getElementById("start").value = "NEXT";
        if(i==1){
            levelOne.style.display = "flex";
            // levelTwo.style.display = "none";
            level.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==2){
            levelOne.style.display = "none";
            levelTwo.style.display = "flex";
            level.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==3){
            levelTwo.style.display = "none";
            levelThree.style.display = "flex";
            level.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        const cards = document.querySelectorAll('.memory-card');
        nbal = 0;
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
            
            // isMatch ? disableCards() : unflipCards();
            if(isMatch){
                setTimeout( function(){disableCards();},1000)
                nbal+=5;
                bal.innerHTML=`<strong>БАЛ:</strong><br> ${nbal}`;
            } else {unflipCards();}
        }
        
        function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
            // if(i==1){
            //     firstCard.remove();
            //     secondCard.remove();
            // }
            // if(i==2){
            //     firstCard.remove();
            //     secondCard.remove();
            // }
            firstCard.remove();
            secondCard.remove();
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
    }
}