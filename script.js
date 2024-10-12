const inputField = document.getElementById('input-field');
const checkButton = document.getElementById('check-button');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const inputText = inputField.value.trim();
    if (inputText === '') {
        resultDiv.textContent = 'Please enter a word to puzzle...';
        resultDiv.style.color = '#red';
    } else {
        const reversedText = inputText.split('').reverse().join('');
        if (inputText === reversedText) {
            resultDiv.textContent = `Yes, "${inputText}" is a palindrome!`;
            resultDiv.style.color = '#2ecc71';
        } else {
            resultDiv.textContent = `No, "${inputText}" is not a palindrome.`;
            resultDiv.style.color = '#e74c3c';
        }
    }
});