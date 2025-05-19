document.getElementById('search-button').addEventListener('click', function() {
    const word = document.getElementById('word-input').value.toLowerCase();
    const result = document.getElementById('result');

    const apiKey = '43a0f991-bf48-4b92-a382-15dc5de311c5'; // Replace with your actual API key
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error('Word not found');
            }
            const definition = data[0].shortdef[0]; // Corrected to access the definition
            result.textContent = `${word.charAt(0).toUpperCase() + word.slice(1)}: ${definition}`;
        })
        .catch(error => {
            result.textContent = error.message;
        });
});
