const titleInput = document.querySelector('#title');
const form = document.querySelector('form');
const movieList = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleText = titleInput.value;

    if (isTitleEmpty(titleText)) {
        alert('Please enter a movie title.');
        return;
    }

    const movieItem = createMovieItem(titleText);
    renderMovieItem(movieItem);

});

movieList.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-status')) {
        const movieItem = e.target.closest("li");
        const statusDisplay = movieItem.querySelector(".movie-status");
        if (statusDisplay.textContent === "Unwatched") {
            statusDisplay.textContent = "Watched";
        } else statusDisplay.textContent = "Unwatched";

        // update statusBtn inner text
        const statusBtn = e.target;
        if (statusBtn.textContent === 'mark as watched') {
            statusBtn.textContent = 'mark as unwatched';
        } else statusBtn.textContent = 'mark as watched';
    }
});

function isTitleEmpty(titleText) {
    return titleText.trim() === '';
}

function createMovieItem(titleText) {
    const movieItem = document.createElement('li');
    const movieCard = document.createElement('div');

    const title = document.createElement('h2');
    const status = document.createElement('p');
    const statusBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    title.textContent = titleText;
    status.textContent = 'Unwatched';
    statusBtn.textContent = 'mark as watched';
    deleteBtn.textContent = 'delete movie';

    statusBtn.classList.add('toggle-status');
    status.classList.add('movie-status');

    movieCard.append(title, status, statusBtn, deleteBtn);
    movieItem.appendChild(movieCard);

    return movieItem;
}

function renderMovieItem(movieItem) {
    movieList.appendChild(movieItem);
}

