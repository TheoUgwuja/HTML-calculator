 // Get the display element
var displayElement = document.getElementById('display');

// Add numbers and operators to the display
function appendValue(value) {
    displayElement.value = displayElement.value + value;
}

// Clear the display
function clearDisplay() {
    displayElement.value = '';
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
