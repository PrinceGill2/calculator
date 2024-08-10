let firstNumber = ''
let secondNumber = ''
let thirdNumber;
let operPressed = false;
let whichoper;
let stage = 0;

const screen = document.getElementById("screen");
const btns = document.querySelectorAll(".button");
const oper = document.querySelectorAll(".operator");
const special = document.querySelectorAll(".special");


function indexNumber(number) { 
if (operPressed === false) {
    firstNumber += number;
}
else if(operPressed === true) { 
    secondNumber += number;
}


}

function incrementNumber() { 
if (operPressed === false) { 
    screen.textContent = firstNumber;
}
else if(operPressed === true) { 
    screen.textContent = secondNumber;
}
}

//add edge case if one operator is pressed
//and then a different operator is pressed
//also add a case if equals is pressed instead of another operator
function operatorPresssed(operator)  {
    stage += 1;
    if (stage === 2) { 
        operation();
    }
    else {
    whichoper = operator;
    operPressed = true;
    }


}

function operation()  {
    switch(whichoper)  {
        case "*":
            firstNumber = (Number(firstNumber) * Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
        break;
        case "+":
            firstNumber = (Number(firstNumber) + Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
        break;
        case "-":
            firstNumber = (Number(firstNumber) - Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
        break;
        case "/":
            firstNumber = (Number(firstNumber) / Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
        break;

    }
}

function equals() { 
    operPressed = false;
    thirdNumber = firstNumber;
    screen.textContent = thirdNumber;
    secondNumber = "";
    firstNumber = ""
    stage = 0
    
}  


btns.forEach((currentValue) => { 
    currentValue.addEventListener("click", () => { 
        indexNumber(currentValue.textContent);
        incrementNumber();
    }
    )
})

oper.forEach((currentValue) => { 
    currentValue.addEventListener("click", () => { 
        operatorPresssed(currentValue.textContent);

    })
    }
)







