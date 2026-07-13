let target = "";

let input = "";

let score = 0;



function startGame() {

    console.log("Start button pressed");


    let entered =
        document.getElementById("phoneInput").value;


    // Remove spaces
    entered = entered.replace(/\s/g, "");


    if (!entered.startsWith("04") || entered.length !== 10) {

        alert(
            "Please enter a valid Australian mobile number, e.g. 0412 345 678"
        );

        return;

    }


    target = entered;


    document.getElementById("targetNumber").innerHTML =
        formatPhone(target);


    document.getElementById("setup").style.display = "none";

    document.getElementById("gameArea").style.display = "block";


}





function pressKey(number) {


    if (input.length < 10) {

        input += number;

    }


    updateDisplay();

}





function clearNumber() {

    input = input.slice(0,-1);

    updateDisplay();

}





function formatPhone(number) {


    if (number.length < 10) {

        return number;

    }


    return (
        number.slice(0,2)
        + " "
        + number.slice(2,6)
        + " "
        + number.slice(6,10)
    );

}





function updateDisplay() {


    document.getElementById("display").innerHTML =
        formatPhone(input);


}





function submit() {


    if (input === target) {


        score += 100;

        alert("Correct! 🎉");


    } else {


        score -= 20;

        alert(
            "Incorrect. Try again!"
        );


    }


    document.getElementById("score").innerHTML = score;


    input = "";

    updateDisplay();


}
