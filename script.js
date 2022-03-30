let displayValue = "0";
let temp="0";
let operatorStore;
let operatorSelected= false;

let display = document.querySelector('.display');
let operands = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');

operands.forEach((operand) => {
    operand.addEventListener('click',(event) => {
        if(operatorSelected){
            displayValue="";
            operatorSelected=false;
        }
        if(displayValue==="0"){
            displayValue="";
        }
        displayValue += `${event.target.getAttribute('value')}`;
        display.textContent = displayValue;
    });
});


operators.forEach((operator) => {
    operator.addEventListener('click',(event) => {
        if (operatorStore!==undefined) {
            equates(temp, displayValue, operatorStore);
            operatorStore = `${event.target.getAttribute('value')}`;
            operatorSelected=true;
            console.log(operatorStore);
            console.log(operatorSelected);
        }
        else {
            temp = displayValue;
            operatorSelected=true;
            operatorStore = `${event.target.getAttribute('value')}`;
        }
    })
})

let equates = function(num1, num2, operator) {
    let result;
    if (operator==='divide') {
        result = parseFloat(num1) / parseFloat(num2);
    }
    else if (operator==='multiply') {
        result = parseFloat(num1) * parseFloat(num2);
    }
    else if (operator==='addition') {
        result = parseFloat(num1) + parseFloat(num2);
    }
    else if (operator==='subtract') {
        result = parseFloat(num1) - parseFloat(num2);
    }
    displayValue = result.toString();
    temp = displayValue;
    operatorStore = undefined;
    display.textContent =displayValue;
}