let firstNumber = ''
let secondNumber = ''
let thirdNumber = ''
let operPressed = false;
let operatorCalcPrevVal = false;
let whichoper = ''
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
    console.log("firstnumber ", firstNumber)
}
else if(operPressed === true) { 
    screen.textContent = secondNumber;
    console.log("secondNumber ", secondNumber)
}
}

//add edge case if one operator is pressed
//and then a different operator is pressed
//also add a case if equals is pressed instead of another operator
function operatorPresssed(operator)  {
    console.log("stage: ", stage);

    if (operator == "=") { 
        equals();
        return;
    }

    if (operatorCalcPrevVal === true) { 
        operation();
        whichoper = operator;
        return;
    }

    stage += 1;
    console.log("stage: ", stage);
    if (stage === 2) { 
        operatorCalcPrevVal = true;
        operation();
        whichoper = operator;
        return;
    }
    else {
    whichoper = operator;
    operPressed = true;
    if (Number(thirdNumber) > 0) { 
        firstNumber = thirdNumber;
        thirdNumber = "";
    }

    }


}

function operation()  {
    switch(whichoper)  {
        case "*":
            firstNumber = (Number(firstNumber) * Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
            console.log("multiplied")
        break;
        case "+":
            firstNumber = (Number(firstNumber) + Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
            console.log("added")
        break;
        case "-":
            firstNumber = (Number(firstNumber) - Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
            console.log("subtracted")
        break;
        case "/":
            firstNumber = (Number(firstNumber) / Number(secondNumber)).toString();
            screen.textContent = firstNumber;
            secondNumber = "";
            stage = 0;
            console.log("divided")
        break;
        default: 

        break;

    }
}

function specialKeyPresssed(specialKey) { 
    switch(specialKey) { 
        case "AC":
            clear();
            break;
        
        case "+/-":
        changeSign();
        break;
    }

}

function equals() { 
    operPressed = false;
    operatorCalcPrevVal = false;
    operation();
    console.log("firstNumber", firstNumber);
    thirdNumber = firstNumber;
    screen.textContent = thirdNumber;
    secondNumber = "";
    firstNumber = ""
    stage = 0
    
}  

function clear()  {
    firstNumber = ''
    secondNumber = ''
    thirdNumber = ''
    operPressed = false;
    whichoper = ''
    screen.textContent = ""
    stage = 0;
    

}

function changeSign() { 
    if (Number(secondNumber) != 0) { 
        secondNumber = (Number(secondNumber) * -1).toString();
        screen.textContent = secondNumber;
    }
    else { 
        firstNumber = (Number(firstNumber) * -1).toString();
        screen.textContent = firstNumber;
    }
}

special.forEach((currentValue) => { 
    currentValue.addEventListener("click", () => { 
        specialKeyPresssed(currentValue.textContent);
    })
})


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







