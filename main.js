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
//store the cards that match in an array
let cardsMatched = []



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
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


//create function to check if 2 cards are matching
function checkForMatch() {
  //select all the cards
  const cards = document.querySelectorAll('img')
  //select first card by id from the chosencard id array
  const optionOneId = cardChosenId[0]
  //select second card by id from the chosencard id array
  const optionTwoId = cardChosenId[1]
  //check if the cards names with the given ids match
  if (cardsChosen[0] === cardsChosen[1]) {
    console.log('Well done! Cards match!')
    //if they match remove them from the board by changing the fruit image with a blank one
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    //store the cards in the cardsMatched array
    cardsMatched.push(cardsChosen)
  }
  else {
    //if they don't match change the fruit img with qmark img
    cards[optionOneId].setAttribute('src', 'images/qmark.png')
    cards[optionTwoId].setAttribute('src', 'images/qmark.png')
    console.log('Cards do not match! Try again!')
  }
  //reset the cardsChosen and cardChosenId after every second card flip
  cardsChosen = []
  cardChosenId = []

}

createBoardGame()