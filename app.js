let quotes = []

const fetchQuotes = async () => {
  const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  const data = await res.json()
  quotes.push(...data.quotes)
}

const button = document.querySelector('#new-quote')
const quote = document.querySelector('#quote')
const text = document.querySelector('#text')
const author = document.querySelector('#author')
const tweet = document.querySelector('#tweet-quote i')

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
]

function setColors() {
  document.body.style.transition = 'background-color 1s'
  button.style.transition = 'background-color 1s'
  tweet.style.transition = 'background-color 1s'
  quote.style.transition = 'color 1s'
  author.style.transition = 'color 1s'

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
  button.style.backgroundColor = randomColor
  tweet.style.backgroundColor = randomColor
  quote.style.color = randomColor
  author.style.color = randomColor
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}


function displayQuote() {
  text.style.opacity = 0
  author.style.opacity = 0
  text.style.transition = 'opacity 1s'
  author.style.transition = 'opacity 1s'
  setTimeout(() => {
    const randomQuote = getRandomQuote()
    text.textContent = randomQuote.quote
    author.textContent = `- ${randomQuote.author}`
    setColors()
    text.style.opacity = 1
    author.style.opacity = 1
  }, 500)
}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchQuotes()
  displayQuote()
})