document.addEventListener("DOMContentLoaded", () => {

  const cardsArray = [
      {
          name:"bee",
          img:"images/bee.png"
      },
      {
          name:"cocktail",
          img:"images/cocktail.png"
      },
      {
          name:"crab",
          img:"images/crab.png"
      },
      {
          name:"fish",
          img:"images/fish.png"
      },
      {
          name:"parrot",
          img:"images/parrot.png"
      },
      {
          name:"rubber-ring",
          img:"images/rubber-ring.png"
      },
      {
          name:"sun",
          img:"images/sun.png"
      },
      {
          name:"watermelon",
          img:"images/watermelon.png"
      },
      {
          name:"bee",
          img:"images/bee.png"
      },
      {
          name:"cocktail",
          img:"images/cocktail.png"
      },
      {
          name:"crab",
          img:"images/crab.png"
      },
      {
          name:"fish",
          img:"images/fish.png"
      },
      {
          name:"parrot",
          img:"images/parrot.png"
      },
      {
          name:"rubber-ring",
          img:"images/rubber-ring.png"
      },
      {
          name:"sun",
          img:"images/sun.png"
      },
      {
          name:"watermelon",
          img:"images/watermelon.png"
      }
  ];

  cardsArray.sort(() => 0.5 - Math.random())


  const board = document.querySelector('.board');
  const result = document.querySelector('.result');

  let cardChosen = [];
  let cardChosenId = [];
  let cardWon = [];

  function gameBoard(){

      for(let i = 0; i < cardsArray.length; i++){
          const cards = document.createElement('div');
      cards.setAttribute('class', 'card');
      cards.setAttribute('data-id', i);
      const cardFront = document.createElement('div');
      cardFront.setAttribute('class', 'card-side card-front');
      const circle = document.createElement('div');
      circle.setAttribute('class', 'circle');

      const cardBack = document.createElement('div');
      cardBack.setAttribute('class', 'card-side card-back');
      const cardImg = document.createElement('img');
      cardImg.setAttribute('src', cardsArray[i].img)

      cardFront.appendChild(circle);
      cards.appendChild(cardFront);
      cardBack.appendChild(cardImg);
      cards.appendChild(cardBack)
      board.appendChild(cards);

      cards.addEventListener('click',flipCard);
      
      };
      
  };


  function checkCardMatch(){
      const AllCards = document.querySelectorAll('.card');
      const optionOneId = cardChosenId[0];
      const optionTwoId = cardChosenId[1];

          if(cardChosen[0] === cardChosen[1]){
              cardWon.push(cardChosenId)
              AllCards[optionOneId].removeEventListener('click', flipCard);
              AllCards[optionTwoId].removeEventListener('click', flipCard);
             
          }else {
              AllCards[optionOneId].querySelector('.card-back').style.transform = "rotateY(180deg)";
              AllCards[optionOneId].querySelector('.card-front').style.transform = "rotateY(0)";
              AllCards[optionTwoId].querySelector('.card-back').style.transform = "rotateY(180deg)"
              AllCards[optionTwoId].querySelector('.card-front').style.transform = "rotateY(0)"

          }
  
         cardChosen = [];
         cardChosenId = [];


      result.textContent = cardWon.length;
      if(cardWon.length === cardsArray.length / 2){
          result.textContent = "Congratulations, You Win the Game !"
      }

  }

  console.log(cardChosen)


 function flipCard(){
  this.querySelector('.card-front').style.transform = "rotateY(-180deg)"
  this.querySelector('.card-back').style.transform = "rotateY(0)"

  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardsArray[cardId].name);
  cardChosenId.push(cardId)
  console.log(cardId)

  if(cardChosenId.length === 2){
      setTimeout(checkCardMatch, 500)
  }
 }

  gameBoard();

})