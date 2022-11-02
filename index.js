//hello what is up
//movies are cool
//console.log('hell0 w0rld!')
let message = document.querySelector('#message');

let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')
    if (!inputField.value) {
        return alert('Please enter a vaild movie title! This is a movie list!');
      }
    let movie = document.createElement('li');
    let movieTitle = document.createElement("span");
    movieTitle.textContent = (inputField.value)
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} was deleted!`;
    revealMessage()
};

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
      message.textContent = `${event.target.textContent} has been watched.`;
    } else {
      message.textContent = `${event.target.textContent} has been added back!`;
    }
    revealMessage()
  };

const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide');
    }, 2000);
};
  