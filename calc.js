// Append numbers and operators to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}