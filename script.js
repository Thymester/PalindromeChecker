document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    // Check if input is empty
    if (!textInput) {
        alert('Please input a value');
        return;
    }

    // Function to normalize the text
    const normalizeText = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    };

    const normalizedText = normalizeText(textInput);
    const reversedText = normalizedText.split('').reverse().join('');

    if (normalizedText === reversedText) {
        resultElement.textContent = `${textInput} is a palindrome`;
        resultElement.className = 'success';
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
        resultElement.className = 'error';
    }
});
