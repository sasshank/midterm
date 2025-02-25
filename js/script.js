// Function to calculate factorial of the given number
function calculateFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Event listener for Enter
document.getElementById('calculate-button').addEventListener('click', function() {
    const input = document.getElementById('number-input').value;
    const resultScreen = document.getElementById('result-screen');
    
    if (input) {
        const factorialResult = calculateFactorial(parseInt(input));
        resultScreen.textContent = `${input}! = ${factorialResult}`;
    } else {
        resultScreen.textContent = 'Please enter a number!';
    }
});

// Event listeners for theme buttons
document.querySelector('[data-bs-theme-value="dark"]').addEventListener('click', function() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');

    // Update all input, button, result-screen, and footer to match the dark mode
    document.querySelector('input').classList.remove('light');
    document.querySelector('button').classList.remove('light');
    document.querySelector('.result-screen').classList.remove('light');
    document.querySelector('footer').classList.remove('light');
});

document.querySelector('[data-bs-theme-value="light"]').addEventListener('click', function() {
    document.body.classList.remove('dark');
    document.body.classList.add('light');

    // Update all input, button, result-screen, and footer to match the light mode
    document.querySelector('input').classList.add('light');
    document.querySelector('button').classList.add('light');
    document.querySelector('.result-screen').classList.add('light');
    document.querySelector('footer').classList.add('light');
});
