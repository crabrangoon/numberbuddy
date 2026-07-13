let target = "512847936";

let input = "";

let score = 0;


// When a keypad button is pressed
function pressKey(number) {

    // Limit input length to Australian mobile number length
    if (input.length < 11) {
        input += number;
    }

    updateDisplay();
}


// Remove last digit
function clearNumber() {

    input = input.slice(0, -1);

    updateDisplay();

}


// Format phone number display
function formatPhone(number) {

    if (number.length === 0) {
        return "_";
    }


    // Full Australian format
    if (number.startsWith("04")) {

        return (
            number.slice(0,2)
            + " "
            + number.slice(2,5)
            + " "
            + number.slice(5,8)
            + " "
            + number.slice(8,10)
        );

    }


    // Memory mode (without 04)
    if (number.length > 2) {

        return (
            number.slice(0,3)
            + " "
            + number.slice(3,6)
            + " "
            + number.slice(6)
        );

    }


    return number;

}


// Update screen
function updateDisplay() {

    document.getElementById("display").innerHTML =
        formatPhone(input);

}


// Check answer
function submit() {


    // Remove the common Australian 04 prefix
    let cleanedInput = input.replace(/^04/, "");


    if (cleanedInput === target) {

        score += 100;

        alert("Correct! 🎉");

    }

    else {

        score -= 20;

        alert(
            "Not quite. The number was 04 512 847 936"
        );

    }


    document.getElementById("score").innerHTML = score;


    // Reset for next attempt
    input = "";

    updateDisplay();

}
