var start = document.getElementById("start").onclick;
var levelOne = document.getElementById("level-one");
var levelMsg = document.getElementById("level");
var levelTwo = document.getElementById("level-two");
var levelThree = document.getElementById("level-three");
var levelFour = document.getElementById("level-four");
var levelFive = document.getElementById("level-five");
var levelSix = document.getElementById("level-six");
var levelSeven = document.getElementById("level-seven");
var bal = document.getElementById("bal");

    var i = 0;
if(start){
    function start(){
        document.getElementById("start").value = "NEXT";
        i++;
        if(i==1){
            levelOne.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==2){
            levelOne.style.display = "none";
            levelTwo.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==3){
            levelTwo.style.display = "none";
            levelThree.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==4){
            levelThree.style.display = "none";
            levelFour.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==5){
            levelFour.style.display = "none";
            levelFive.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==6){
            levelFive.style.display = "none";
            levelSix.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
        }
        if(i==7){
            levelSix.style.display = "none";
            levelSeven.style.display = "flex";
            levelMsg.innerHTML=`<strong>Найди сравнение карточек</strong><br> LEVEL ${i}`;
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

