// =============================
// Phone Memory Trainer v0.2
// =============================

let target = "";
let input = "";
let score = 0;

let gameState = "setup";

let countdown = 5;
let timer = null;


// =============================
// Start Game
// =============================

function startGame() {

    let entered =
        document.getElementById("phoneInput").value;

    entered = entered.replace(/\s/g, "");

    if (!/^04\d{8}$/.test(entered)) {

        alert("Please enter a valid Australian mobile number.");

        return;

    }

    target = entered;

    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";

    beginStudy();

}



// =============================
// Study Phase
// =============================

function beginStudy() {

    gameState = "study";

    input = "";
    updateDisplay();

    countdown = 5;

    document.getElementById("instruction").innerHTML =
        "👀 Memorise this number";

    document.getElementById("targetNumber").innerHTML =
        formatPhone(target);

    document.getElementById("countdown").innerHTML =
        countdown;

    clearInterval(timer);

    timer = setInterval(() => {

        countdown--;

        document.getElementById("countdown").innerHTML =
            countdown;

        if (countdown <= 0) {

            clearInterval(timer);

            beginRecall();

        }

    },1000);

}



// =============================
// Recall Phase
// =============================

function beginRecall() {

    gameState = "recall";

    document.getElementById("instruction").innerHTML =
        "📞 Dial the number";

    document.getElementById("targetNumber").innerHTML =
        "████ ████";

    document.getElementById("countdown").innerHTML = "";

    input = "";

    updateDisplay();

}



// =============================
// Keypad
// =============================

function pressKey(number) {

    if(gameState !== "recall")
        return;

    if(input.length < 10){

        input += number;

    }

    updateDisplay();

}



function clearNumber(){

    if(gameState !== "recall")
        return;

    input =
        input.slice(0,-1);

    updateDisplay();

}



// =============================
// Submit
// =============================

function submit(){

    if(gameState !== "recall")
        return;


    if(input === target){

        score +=100;

        document.getElementById("instruction").innerHTML =
            "✅ Excellent!";

    }

    else{

        score -=20;

        document.getElementById("instruction").innerHTML =
            "❌ Try Again";

    }


    document.getElementById("score").innerHTML =
        score;


    document.getElementById("targetNumber").innerHTML =
        formatPhone(target);


    gameState = "result";


    setTimeout(() => {

        beginStudy();

    },3000);

}



// =============================
// Display
// =============================

function updateDisplay(){

    if(input.length===0){

        document.getElementById("display").innerHTML =
            "Tap the keypad";

        return;

    }

    document.getElementById("display").innerHTML =
        formatPhone(input);

}



// =============================
// Format Australian Number
// =============================

function formatPhone(number){

    if(number.length < 10)
        return number;

    return (
        number.slice(0,2)
        + " "
        + number.slice(2,6)
        + " "
        + number.slice(6)
    );

}
