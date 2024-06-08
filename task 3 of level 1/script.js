let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display.innerText = '0';
}

function appendToDisplay(value) {
    if (value === 'X') value = '*';
    if (display.innerText === '0' && value !== '.') {
        display.innerText = '';
    }
    currentInput += value;
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
