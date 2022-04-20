document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:"batman",
            img:"images/batman.png"
        },
        {
            name: "deadpool",
            img:"images/deadpool.png"
        },
        {
            name:"lego",
            img:"images/lego.png"
        },
        {
            name:"spiderman",
            img:"images/spiderman.png"
        },
        {
            name:"thor",
            img:"images/thor.png"
        },
        {
            name:"wolverine",
            img:"images/wolverine.png"
        },
        {
            name:"captain-america",
            img:"images/captain-america.png"
        },
        {
            name:"superman",
            img:"images/superman.png"
        },
        {
            name:"batman",
            img:"images/batman.png"
        },
        {
            name: "deadpool",
            img:"images/deadpool.png"
        },
        {
            name:"lego",
            img:"images/lego.png"
        },
        {
            name:"spiderman",
            img:"images/spiderman.png"
        },
        {
            name:"thor",
            img:"images/thor.png"
        },
        {
            name:"wolverine",
            img:"images/wolverine.png"
        },
        {
            name:"captain-america",
            img:"images/captain-america.png"
        },
        {
            name:"superman",
            img:"images/superman.png"
        }
    ];


    const grid = document.querySelector(".grid");
    const result = document.querySelector("#result");

    let cardsChosen = [];
    let cardsChoseId = [];
    let cardsWon = [];

    const createBoard = () => {
       
        for(let i = 0; i < cardArray.length;i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'images/patterns.png');
            card.setAttribute('data-id', i);
            card.style.cursor = "pointer";
            card.style.padding = "10px";
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChoseId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)
    }

    createBoard()
})