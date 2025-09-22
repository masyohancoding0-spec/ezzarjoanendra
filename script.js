const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');


num1Input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        num2Input.focus();
    }
});

num2Input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculate('+'); 
    }
});

/**
 * Perform calculation based on the operator
 * @param {string} operator 
 */
function calculate(operator) {
  
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
   
    if (isNaN(num1) || isNaN(num2)) {
        showError('');
        return;
    }
    
    
    hideError();
    
    let result;
    
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                showError('Tidak bisa membagi dengan nol!');
                return;
            }
            result = num1 / num2;
            break;
        default:
            showError('Operator tidak valid!');
            return;
    }
    
   
    if (Number.isInteger(result)) {
        resultDisplay.textContent = result;
    } else {
        resultDisplay.textContent = result.toFixed(2);
    }
    
    
    resultDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultDisplay.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Display error message
 * @param {string} message - The error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    resultDisplay.textContent = 'Silakan masukkan angka yang valid!';
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.remove('show');
}

/**
 * Clear all inputs and reset the calculator
 */
function clearAll() {
    num1Input.value = '';
    num2Input.value = '';
    resultDisplay.textContent = '0';
    hideError();
    num1Input.focus();
}


document.addEventListener('DOMContentLoaded', function() {
    num1Input.focus();
});