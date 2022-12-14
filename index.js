console.log('Hello World')

// Step 1: Grab an HTML element

const message = document.querySelector('#message')


// Step 2: Write the function

const addMovie = (event) => {
event.preventDefault()
let inputField = document.querySelector('input')
const movie = document.createElement("li")
const movieTitle = document.createElement('span')
const ul = document.querySelector('ul')
movieTitle.textContent = inputField.value
movie.appendChild(movieTitle)
const deleteBtn = document.createElement('button')
deleteBtn.textContent = ('x')
deleteBtn.addEventListener('click',deleteMovie)
movie.appendChild(deleteBtn)
ul.appendChild(movie)
movieTitle.addEventListener('click',crossOffMovie)
inputField.value = ""    
}
const form = document.querySelector('form')

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
    message.textContent = `${event.target.textContent} watched!`
    }else{
    message.textContent = `${event.target.textContent} added back!`}
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => 
    {message.classList.add('hide')
    },1000)   
}
// Step 3: Combines step 1 and 2 using an Event Listen

form.addEventListener('submit', addMovie)