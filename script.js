// Get the display element
var displayElement = document.getElementById('display');
var memory = 0;

// Add numbers and operators to the display
function appendValue(value) {
    displayElement.value = displayElement.value + value;
}

// Clear the display
function clearDisplay() {
    displayElement.value = '';
}

// Memory functions
function memoryAdd() {
    try {
        memory += Number(eval(displayElement.value || 0));
        displayElement.value = 'M+';
        setTimeout(function() {
            displayElement.value = '';
        }, 500);
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function memorySubtract() {
    try {
        memory -= Number(eval(displayElement.value || 0));
        displayElement.value = 'M-';
        setTimeout(function() {
            displayElement.value = '';
        }, 500);
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function memoryRecall() {
    displayElement.value = memory;
}

function clearMemory() {
    memory = 0;
    displayElement.value = 'Memory cleared';
    setTimeout(function() {
        displayElement.value = '';
    }, 500);
}

function squareRoot() {
    try {
        var value = eval(displayElement.value || 0);
        displayElement.value = Math.sqrt(value);
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function toggleSquare() {
    try {
        var value = eval(displayElement.value || 0);
        displayElement.value = value * value;
    } catch (error) {
        displayElement.value = 'Error';
    }
}

// Calculate the math expression
function calculateResult() {
    try {
        var result = eval(displayElement.value);
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
}
