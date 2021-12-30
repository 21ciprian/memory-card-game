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


//create board game
function createBoardGame() {
  cardsArray.map(function (item, i) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/qmark.png')
    card.setAttribute('data-id', i)
    card.classList.add('cardImage')
    gameGrid.appendChild(card)
  })
}


createBoardGame()