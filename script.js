
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};
 
function multiply(num1, num2) {
    return num1 * num2;
};

function division(num1, num2) {
    return num1 / num2;
};

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2)
    } else if (operator == 'x') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return division(num1, num2);
    };
};

const display = document.getElementById('display');
const numberButtons = document.getElementsByClassName('numberButton');
const button0 = document.getElementsByClassName('b0')[0];
const operatorButtons = document.getElementsByClassName('operatorButton');
const equalButton = document.getElementsByClassName('bEqual')[0];
const clearButton = document.getElementsByClassName('bC')[0];
const clearAllButton = document.getElementsByClassName('bAc')[0];

const plusButton = document.getElementsByClassName('b+')[0];
const subtractButton = document.getElementsByClassName('b-')[0];
const multiplyButton = document.getElementsByClassName('bX')[0];
const divisionButton = document.getElementsByClassName('bDivision')[0];

let equalPress = false;
let plusPress = false;
let subtractPress = false;
let multiplyPress = false;
let divisionPress = false;

let displayValue = '';
let firstNumber;
let result;
let operatorSign;
let previousOperator = '';

let plusClick = 0;
let subtractClick = 0;
let multiplyClick = 0;
let divisionClick = 0;

for (let i=0; i<numberButtons.length; i++) {       // storing the pressed button's value in a variable
    numberButtons[i].addEventListener('click', () => {
        displayValue += numberButtons[i].value;
        display.textContent = displayValue;
        plusButton.disabled = false;
        subtractButton.disabled = false;
        multiplyButton.disabled = false;
        divisionButton.disabled = false;
        equalButton.disabled = false;

    });
};

button0.addEventListener('click', () => {       // makes it so you can't add multiple zero's to zero (0000000)
    if (display.textContent != 0) {
        displayValue += button0.value;
        display.textContent = displayValue;
    };
});

clearAllButton.addEventListener('click', () => {     // clear all button that resets everything to default
    display.textContent = 0;
    displayValue = '';
    firstNumber = '';
    result = '';
    previousOperator = '';
    plusClick = 0;
    subtractClick = 0;
    multiplyClick = 0;
    divisionClick = 0;
    equalPress = false;
    plusPress = false;
    subtractPress = false;
    multiplyPress = false;
    divisionPress = false;
    equalButton.disabled = false;
});

clearButton.addEventListener('click', () => {       // backspace button
    previousOperator = '';
    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.textContent = displayValue;
    if (displayValue.length < 1) {
        display.textContent = 0;
        firstNumber = '';
        result = '';
    };
});

for (let i=0; i<operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        plusButton.disabled = true;         // disabling buttons on press so it doesn't result in an error if you try to press multiple operators at once
        subtractButton.disabled = true;
        multiplyButton.disabled = true;
        divisionButton.disabled = true;
        equalButton.disabled = true;
        if (operatorButtons[i].value == '+') {
            operatorSign = '+';
            if (previousOperator == '') {
                previousOperator = "+"
            };
            if (subtractPress == true || plusPress == true || multiplyPress == true || divisionPress == true) {
                if (equalPress !== true) {
                    if (plusClick > 1) {
                        display.textContent = operate(parseInt(result), operatorSign, parseInt(displayValue));
                        result = display.textContent;
                        plusClick--;
                    };
                    if (firstNumber == '') {
                        firstNumber = 0;
                    }
                    display.textContent = operate(parseInt(firstNumber),previousOperator, parseInt(displayValue));   // operates only 2 numbers at a time  
                    result = operate(parseInt(firstNumber),previousOperator, parseInt(displayValue));  
                    previousOperator = "+"
                    displayValue = display.textContent
                    plusClick ++;
                };
            };
        equalPress = false;
        firstNumber = displayValue;
        displayValue = '';    
        plusPress = true;
        } else if (operatorButtons[i].value == '-') {
            operatorSign = '-'
            if (previousOperator == '') {
                previousOperator = "-"
            };
            if (subtractPress == true || plusPress == true || multiplyPress == true || divisionPress == true) {
                if (equalPress !== true) {
                    if (subtractClick > 1) {
                        display.textContent = operate(parseInt(result), operatorSign, parseInt(displayValue));
                        result = display.textContent;
                    }
                    if (firstNumber == '') {
                        firstNumber = 0;
                    }
                    display.textContent = operate(parseInt(firstNumber), previousOperator, parseInt(displayValue));                    
                    result = operate(parseInt(firstNumber), previousOperator, parseInt(displayValue));
                    previousOperator = "-"
                    displayValue = display.textContent
                    subtractClick ++;
                }
            }; 
            equalPress = false;
            firstNumber = displayValue;
            displayValue = '';    
            subtractPress = true;
        } else if (operatorButtons[i].value == 'x') {
            operatorSign = "x";
            if (previousOperator == '') {
                previousOperator = "x"
            };
            if (subtractPress == true || plusPress == true || multiplyPress == true || divisionPress == true) {
                if (equalPress !== true) {
                    if (multiplyClick > 1) {
                        display.textContent = operate(parseInt(result), operatorSign, parseInt(displayValue));
                        result = display.textContent;
                        multiplyClick--;
                    };
                    if (firstNumber == '') {
                        firstNumber = 0;
                    }
                    display.textContent = operate(parseInt(firstNumber), previousOperator, parseInt(displayValue));                    
                    result = operate(parseInt(firstNumber), previousOperator, parseInt(displayValue));
                    previousOperator = 'x';
                    displayValue = display.textContent  
                    multiplyClick ++;
                };
            };
            equalPress = false;
            firstNumber = displayValue;
            displayValue = '';    
            multiplyPress = true;
        } else if (operatorButtons[i].value == '/') {
            operatorSign = "/";
            if (previousOperator == '') {
                previousOperator = "/"
            };
            if (subtractPress == true || plusPress == true || multiplyPress == true || divisionPress == true) {
                if (equalPress !== true) {
                    if (divisionClick > 1) {
                        display.textContent = operate(parseInt(result), operatorSign, parseInt(displayValue));
                        result = display.textContent;
                        divisionClick--;
                    };
                    if (firstNumber == '') {
                        firstNumber = 0;
                    }
                    display.textContent = operate(parseInt(firstNumber),previousOperator, parseInt(displayValue));                    
                    result = operate(parseInt(firstNumber),previousOperator, parseInt(displayValue));
                    previousOperator = "/"
                    displayValue = display.textContent
                    divisionClick ++;
                };
            };
            equalPress = false;
            firstNumber = displayValue;
            displayValue = '';    
            divisionPress = true;
        }
    }); 
};


equalButton.addEventListener('click', () => {
    previousOperator = '';
    equalPress = true;
    if (firstNumber == '' && divisionPress == true && displayValue == 0) {
        display.textContent = 0;
        alert("You can't divide by 0 !");
        divisionPress = false;
    } else if (firstNumber == '' && divisionPress == true) {
        display.textContent = 0;
        displayValue = 0;
        divisionPress = false;
    } else if (firstNumber == '' && multiplyPress == true && displayValue == '') {
        alert("You can't multiply by 0 !")
    } else if (firstNumber == '') {
        display.textContent = operate(parseInt(displayValue),operatorSign, 0);
        displayValue = display.textContent;
    } else if (firstNumber !== '') {
        if (plusPress == true) {
            display.textContent = operate(parseInt(firstNumber),operatorSign, parseInt(displayValue));
            displayValue = display.textContent;
        } else if (subtractPress == true) {
            display.textContent = operate(parseInt(firstNumber),operatorSign, parseInt(displayValue));
            displayValue = display.textContent;
        } else if (multiplyPress == true) {
            display.textContent = operate(parseInt(firstNumber),operatorSign, parseInt(displayValue));
            displayValue = display.textContent;
        } else if (divisionPress == true) {
            display.textContent = operate(parseInt(firstNumber),operatorSign, parseInt(displayValue));
            displayValue = display.textContent;
        }
    }
});

