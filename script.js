const titleInput = document.querySelector('#title');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titleText = titleInput.value;

    if (isTitleEmpty(titleText)) {
        alert('Please enter a film title.');
        return;
    }
});

function isTitleEmpty(titleText) {
    return titleText.trim() === '';
}
