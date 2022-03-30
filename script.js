let displayValue = "0";
let temp="0";
let operatorStore;
let operatorSelected= false;

let display = document.querySelector('.display');
let operands = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');
let equateBtn = document.querySelector('.equals');
let clearBtn = document.querySelector('.clear');
let percentBtn = document.querySelector('.percent');


percentBtn.addEventListener('click', (event) =>{
    let number = parseFloat(displayValue);
    if(number!==0) {
        number = number/100;
        displayValue = number.toString();
        display.textContent = displayValue;
    }
})

clearBtn.addEventListener('click', (event) => {
    displayValue = "0";
    temp="0";
    operatorStore = undefined;
    operatorSelected= false;
    display.textContent= displayValue;
});

equateBtn.addEventListener('click', (event)=> {
    equates(temp, displayValue, operatorStore);
});

operands.forEach((operand) => {
    operand.addEventListener('click',(event) => {
        if (event.target.getAttribute('value')==='.'&& displayValue.includes('.') ){
            console.log('cant put 2 dots')
        }
        else {
            if(operatorSelected){
                displayValue="";
                operatorSelected=false;
            }
            if(displayValue==="0"){
                displayValue="";
            }
            displayValue += `${event.target.getAttribute('value')}`;
            display.textContent = displayValue;
        }
    });
});


operators.forEach((operator) => {
    operator.addEventListener('click',(event) => {
        if (operatorStore!==undefined) {
            equates(temp, displayValue, operatorStore);
            operatorStore = `${event.target.getAttribute('value')}`;
            operatorSelected=true;
        }
        else {
            temp = displayValue;
            operatorSelected=true;
            operatorStore = `${event.target.getAttribute('value')}`;
        }
    })
})

let equates = function(num1, num2, operator) {
if (operator==='divide' && (num2)==='0'){
    alert("don't divide with 0!!")
}
else if (operator){
    let result = 0;
    if (operator==='divide') {
        if(parseFloat(num2)===0){

        }
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
    result = parseFloat(result.toFixed(7));
    displayValue = result.toString();
    temp = displayValue;
    operatorStore = undefined;
    display.textContent =displayValue;
}
}