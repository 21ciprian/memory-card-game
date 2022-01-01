import { fruitsArray } from './fruits-data.js'


//select DOM elements and store the vlues in variables
const gameGrid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#result')
const message = document.querySelector('h3')
const startButton = document.querySelector('#startGame')
let seconds = 0
let minutes = 0;
const timer = document.querySelector('#timer');
const modal = document.querySelector('#modal')
const finalTime = document.querySelector('#finalTime')
const close = document.querySelector('#close')
const playAgain = document.querySelector('#playAgain')
let interval;
//store the cards names of the card that was clicked
let cardsChosen = []

//store the cards ids of the card that was clicked
let cardChosenId = []

//store the cards that match in an array
let cardsMatched = []



//create board game
export function createBoardGame() {

  //loop over the cards array to create img DOM elements
  fruitsArray.map(function (item, i) {
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
    // console.log('cards: ', card)
    gameGrid.appendChild(card)
    console.log('gameGrid: ', gameGrid)
  })
}
function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = `${minutes}min ${seconds}sec`;
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hour++;
      minutes = 0;
    }
  }, 1000);
}

//create flip card function to show images
export function flipCard() {

  //get the id of the card and store it in a variable
  const cardId = this.getAttribute('data-id')
  console.log('card Id: ', cardId)
  //save the card name that was clicked in the cards chosen array
  cardsChosen.push(fruitsArray[cardId].name)
  console.log('cardChosen: ', cardsChosen)
  //save the card id that was clicked in the card chosen id array
  cardChosenId.push(cardId)
  console.log('cardChosenId: ', cardChosenId)
  //set the src attribute to be the img from the cards array tht matches the cardid
  this.setAttribute('src', fruitsArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


//create function to check if 2 cards are matching
export function checkForMatch() {

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
    cards[optionOneId].classList.add('disabled')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].classList.add('disabled')

    //store the cards in the cardsMatched array
    cardsMatched.push(cardsChosen)
  }
  else {
    //if they don't match, change back the fruit img with qmark img
    cards[optionOneId].setAttribute('src', 'images/qmark.png')
    cards[optionTwoId].setAttribute('src', 'images/qmark.png')
    console.log('Cards do not match! Try again!')
  }
  //reset the cardsChosen and cardChosenId after every second card flip
  cardsChosen = []
  cardChosenId = []
  //display score for every pair of matched card
  scoreDisplay.innerText = cardsMatched.length
  //check if there all the matching caards were found
  if (cardsMatched.length === fruitsArray.length / 2) {
    // message.innerText = 'Congrats, you found all the matching cards'
    showModal()
    resetCards(cards)
  }
}
//show modal
export function showModal() {
  finalTime.innerHTML = `Final time: ${minutes}min ${seconds}sec`
  clearInterval(interval)
  modal.classList.remove('hide')
  modal.classList.add('show')
}
//hide modal
export function hideModal() {
  modal.classList.remove('show')
  modal.classList.add('hide')

}
//resets cards with qmark image
export function resetCards(cards) {
  cards.forEach(card => {
    card.removeAttribute('src')
    card.setAttribute('src', 'images/qmark.png')
  })
}
//starts game
export function startGame() {
  gameGrid.innerHTML = ''
  message.innerText = 'Score: '
  createBoardGame()
  shuffleCards()
  resetTimer()
  startTimer()
  hideModal()

}
//resets stats
export function resetStats() {
  timer.innerText = '0min 0sec'
  message.innerText = 'Score: 0'
  seconds = 0
  minutes = 0
}
//resets timer
export function resetTimer() {
  clearInterval(interval)
  resetStats()
}
//shuffle cards
export function shuffleCards() {
  fruitsArray.sort(function () {
    return 0.5 - Math.random()
  })
}
//start game when click the button
startButton.addEventListener('click', startGame)
close.addEventListener('click', hideModal)
playAgain.addEventListener('click', startGame)
//invoke the function to start the game when page loads
createBoardGame()
shuffleCards()
startTimer()
