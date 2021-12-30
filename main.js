//create cards array for the game
const cardsArray = [
  {
    name: 'apple',
    img: 'images/apple.jpg'
  },
  {
    name: 'banana',
    img: 'images/banana.jpg'
  },
  {
    name: 'grape',
    img: 'images/grape.jpg'
  },
  {
    name: 'kiwi',
    img: 'images/kiwi.jpg'
  },
  {
    name: 'orange',
    img: 'images/orange.jpg'
  },
  {
    name: 'pear',
    img: 'images/pear.jpg'
  },
  {
    name: 'apple',
    img: 'images/apple.jpg'
  },
  {
    name: 'banana',
    img: 'images/banana.jpg'
  },
  {
    name: 'grape',
    img: 'images/grape.jpg'
  },
  {
    name: 'kiwi',
    img: 'images/kiwi.jpg'
  },
  {
    name: 'orange',
    img: 'images/orange.jpg'
  },
  {
    name: 'pear',
    img: 'images/pear.jpg'
  },
]
//select DOM elements and store the vlues in variables
const gameGrid = document.querySelector('.grid')
//store the cards names of the card that was clicked
let cardsChosen = []
//store the cards ids of the card that was clicked
let cardChosenId = []


//create board game
function createBoardGame() {
  //loop over the cards array to create img DOM elements
  cardsArray.map(function (item, i) {
    //create img element
    const card = document.createElement('img')
    //set src attribute the back card (qmark)
    card.setAttribute('src', 'images/qmark.png')
    //set data-id attribute the index from cards array
    card.setAttribute('data-id', i)
    //give class to set img dimensions
    card.classList.add('cardImage')
    //add click event to flip the cards and see the fruit images
    card.addEventListener('click', flipCard)
    //append the card to the DOM
    gameGrid.appendChild(card)
  })
}
//create flip card function to show images
function flipCard() {
  //get the id of the card and store it in a variable
  const cardId = this.getAttribute('data-id')
  console.log('card Id: ', cardId)
  //save the card name that was clicked in the cards chosen array
  cardsChosen.push(cardsArray[cardId].name)
  console.log('cardChosen: ', cardsChosen)
  //save the card id that was clicked in the card chosen id array
  cardChosenId.push(cardId)
  console.log('cardChosenId: ', cardChosenId)
  //set the src attribute to be the img from the cards array tht matches the cardid
  this.setAttribute('src', cardsArray[cardId].img)

}

createBoardGame()