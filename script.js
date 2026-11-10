const titleInput = document.querySelector('#title');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titleText = titleInput.value;

    if (isTitleEmpty(titleText)) {
        alert('Please enter a movie title.');
        return;
    }
});

function isTitleEmpty(titleText) {
    return titleText.trim() === '';
}

function createMovieCard(titleText) {
    const movieCard = document.createElement('div');
    const title = document.createElement('h2');
    const status = document.createElement('p');
    const statusBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    title.textContent = titleText;
    status.textContent = 'Unwatched';
    statusBtn.textContent = 'mark as watched';
    deleteBtn.textContent = 'delete movie';

    movieCard.append(title, status, statusBtn, deleteBtn);

    return movieCard;
}