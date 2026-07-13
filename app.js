//
// app.js
// Connects the UI with the game engine
//


// =============================
// Local UI state
// =============================

let playerInput = "";



// =============================
// Start button
// =============================

function startGame(){

    let phone =
        document.getElementById("phoneInput").value;


    phone =
        cleanPhone(phone);


    if(!/^04\d{8}$/.test(phone)){

        alert(
            "Please enter a valid Australian mobile number."
        );

        return;

    }


    document.getElementById("setup").style.display =
        "none";


    document.getElementById("game").style.display =
        "block";


    startTraining(phone);


    showChallenge();


}




// =============================
// Display current challenge
// =============================

function showChallenge(){

    let challenge =
        getChallenge();


    document.getElementById("instruction").innerHTML =
        challenge.question;


    document.getElementById("targetNumber").innerHTML =
        challenge.display;


    playerInput = "";

    updateDisplay();

}





// =============================
// Keypad
// =============================

function pressKey(number){


    if(playerInput.length < 10){

        playerInput += number;

    }


    updateDisplay();

}





function clearNumber(){

    playerInput =
        playerInput.slice(0,-1);


    updateDisplay();

}





// =============================
// Submit answer
// =============================

function submit(){


    let result =
        submitAnswer(playerInput);



    document.getElementById("instruction").innerHTML =
        result.message;



    document.getElementById("score").innerHTML =
        result.score;
    document.querySelector(".level").innerHTML =
    "Level "
    + calculateLevel()
    + " • "
    + getLevelName();

    if(result.correct){


        document
        .getElementById("targetNumber")
        .innerHTML =
            "⭐ Great work!";


    }

    else{


        document
        .getElementById("targetNumber")
        .innerHTML =
            "Answer: "
            +
            formatPhone(
                result.correctAnswer
            );


    }



    setTimeout(()=>{


        nextChallenge();


        showChallenge();


    },2500);


}





// =============================
// Display typed number
// =============================

function updateDisplay(){


    let display =
        playerInput;


    if(display.length > 0){

        display =
            formatPhone(display);

    }

    else{

        display =
            "Tap the keypad";

    }


    document.getElementById("display")
    .innerHTML =
        display;


}
