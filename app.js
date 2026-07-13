let target = "512847936";

let input = "";

let score = 0;



function pressKey(number){

    input += number;

    updateDisplay();

}



function clearNumber(){

    input = input.slice(0,-1);

    updateDisplay();

}



function updateDisplay(){

    if(input.length === 0){

        document.getElementById("display").innerHTML="_";

    }

    else{

        document.getElementById("display").innerHTML=input;

    }

}



function submit(){

    if(input === target){

        score += 100;

        alert("Correct! 🎉");

    }

    else{

        score -= 20;

        alert(
            "Not quite. Try again!"
        );

    }


    document.getElementById("score").innerHTML=score;


    input="";

    updateDisplay();

}
