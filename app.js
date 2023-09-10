const display = document.getElementById("display");
let currentInput = "";
let result = null;

// Add event listeners to all buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

function handleClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "C") {
        clearDisplay();
    } else if (buttonValue === "←") {
        backspace();
    } else if (buttonValue === "=") {
        calculate();
    } else {
        addToDisplay(buttonValue);
    }
}

function clearDisplay() {
    currentInput = "";
    result = null;
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function addToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function calculate() {
    try {
        result = eval(currentInput);
        updateDisplay();
        currentInput = result.toString();
    } catch (error) {
        display.textContent = "Error";
    }
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}
