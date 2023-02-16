"use strict"


let inputBoxContent = document.getElementById("input-box");
let resultBoxContent = document.getElementById("result-box");
let buttonContainer = document.getElementById("num-input-box");

let inputExpression = 0;


const numButtons = [];

// Generate buttons from 0 to 9
for (let i = 0; i <= 9; i++) {
    let numButton = document.createElement("num-button");
    numButton.textContent = i;

    numButton.id = ("num-button-" + i);
    numButton.className = "num-button";

    numButtons.push(numButton); //put numButton inside numButtons[]
    buttonContainer.appendChild(numButton);
}

// here is the solution: take the value from newly added textContent.
buttonContainer.addEventListener('click', (event) => {
    if(event.target.textContent.length === 1) {
        const numButtonValue = event.target.textContent;
    if (inputBoxContent.textContent != 0) {
        inputBoxContent.textContent = (inputBoxContent.textContent + numButtonValue);
    } else {
        inputBoxContent.textContent = numButtonValue;
    }
    
    window.inputExpression = inputBoxContent.textContent;
}
})

function buttonPlus() {
    inputBoxContent.textContent = (inputBoxContent.textContent + ' + ');
}
function buttonMinus() {
    inputBoxContent.textContent = (inputBoxContent.textContent + ' - ');
}
function buttonMultiply() {
    inputBoxContent.textContent = (inputBoxContent.textContent + ' * ');
}
function buttonDivide() {
    inputBoxContent.textContent = (inputBoxContent.textContent + ' / ');
}


function buttonEquals() {
    inputExpression = inputBoxContent.textContent;
    resultBoxContent.textContent = inputExpression;
    inputExpression = String(inputExpression);

    //And now calculate result
    let mathFunction = new Function(`return ${inputExpression}`);
    resultBoxContent.textContent = mathFunction();
}

function buttonClear() {
    inputBoxContent.textContent = 0;
}

function copyResult() {
    let copyText = resultBoxContent.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        let clipboardAlert = document.createElement("clipboard-alert");
        clipboardAlert.textContent = "Copied to clipboard.";
        clipboardAlert.className = "clipboard-alert-box"
        
        let copyIcon = document.getElementById("copy-icon");
        
        // replace copyIcon with clipboardAlert...
        copyIcon.parentNode.replaceChild(clipboardAlert, copyIcon);
        
        // ... but after 2 seconds do the opposite.
        setTimeout(function() {
            clipboardAlert.parentNode.replaceChild(copyIcon, clipboardAlert);
        }, 2000);
        
    });
}