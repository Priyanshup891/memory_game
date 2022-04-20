document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "batman",
      img: "images/batman.png",
    },
    {
      name: "deadpool",
      img: "images/deadpool.png",
    },
    {
      name: "lego",
      img: "images/lego.png",
    },
    {
      name: "spiderman",
      img: "images/spiderman.png",
    },
    {
      name: "thor",
      img: "images/thor.png",
    },
    {
      name: "wolverine",
      img: "images/wolverine.png",
    },
    {
      name: "captain-america",
      img: "images/captain-america.png",
    },
    {
      name: "superman",
      img: "images/superman.png",
    },
    {
      name: "batman",
      img: "images/batman.png",
    },
    {
      name: "deadpool",
      img: "images/deadpool.png",
    },
    {
      name: "lego",
      img: "images/lego.png",
    },
    {
      name: "spiderman",
      img: "images/spiderman.png",
    },
    {
      name: "thor",
      img: "images/thor.png",
    },
    {
      name: "wolverine",
      img: "images/wolverine.png",
    },
    {
      name: "captain-america",
      img: "images/captain-america.png",
    },
    {
      name: "superman",
      img: "images/superman.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const result = document.querySelector("#result");

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  

  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/patterns.png");
      card.setAttribute("data-id", i);
      card.style.cursor = "pointer";
      card.style.padding = "10px";
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };

  function checkForMatch(){
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];

      if(cardsChosen[0] === cardsChosen[1]){
          alert('You find the match !')
          cards[optionOneId].setAttribute('src', "images/white.png");
          cards[optionTwoId].setAttribute('src', "images/white.png");
          cardsWon.push(cardsChosen);
      } else {
          cards[optionOneId].setAttribute('src', 'images/patterns.png');
          cards[optionTwoId].setAttribute('src', 'images/patterns.png');
          alert("sorry, you not find the match");
      }

      cardsChosen = [];
      cardsChosenId = [];

      result.textContent = cardsWon.length;
      if(result.textContent == cardArray.length / 2){
          result.textContent = "Congratulations, you win this game !"
      }

  }


  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosenId.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
