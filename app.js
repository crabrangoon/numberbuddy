let target = "";

let input = "";

let score = 0;



// Start training with user's number
function startGame(){

    let entered =
    document.getElementById("phoneInput").value;


    // remove spaces
    entered =
    entered.replace(/\s/g,"");


    // basic Australian check
    if(!entered.startsWith("04")
        || entered.length !== 10){

        alert(
        "Please enter an Australian mobile number starting with 04"
        );

        return;

    }


    target = entered;


    document.getElementById("targetNumber")
    .innerHTML =
    formatPhone(target);



    document.getElementById("setup")
    .style.display="none";


    document.getElementById("gameArea")
    .style.display="block";


}



// keypad press
function pressKey(number){

    if(input.length < 10){

        input += number;

    }

    updateDisplay();

}



// backspace
function clearNumber(){

    input =
    input.slice(0,-1);

    updateDisplay();

}



// format Australian phone number
function formatPhone(number){


    if(number.length < 10){

        return number;

    }


    return (
        number.slice(0,2)
        +" "
        +number.slice(2,6)
        +" "
        +number.slice(6)
    );


}



// show typed number
function updateDisplay(){

    document.getElementById("display")
    .innerHTML =
    formatPhone(input);

}



// check answer
function submit(){


    if(input === target){


        score +=100;

        alert(
        "Correct! 🎉"
        );


    }

    else{


        score -=20;

        alert(
        "Try again!"
        );


    }


    document.getElementById("score")
    .innerHTML=score;


    input="";

    updateDisplay();


}
