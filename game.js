//
// game.js
// Main game engine
//


// =====================================
// Game State
// =====================================

const Game = {

    state:"setup",

    phone:"",

    challenge:null,

    score:0,

    streak:0,

    level:1

};



// =====================================
// Start a training session
// =====================================

function startTraining(phoneNumber){

    Game.phone =
        cleanPhone(phoneNumber);


    Game.state =
        "playing";


    Game.score = 0;

    Game.streak = 0;


    return nextChallenge();

}



// =====================================
// Create next challenge
// =====================================

function nextChallenge(){

    Game.challenge =
        generateChallenge(
            Game.phone
        );


    return Game.challenge;

}



// =====================================
// Check player's answer
// =====================================

function submitAnswer(answer){

    if(!Game.challenge){

        return {

            correct:false,

            message:"No challenge active"

        };

    }


    answer =
        cleanPhone(answer);



    let correctAnswer =
        cleanPhone(
            Game.challenge.answer
        );



    if(answer === correctAnswer){


        Game.score += 100;


        Game.streak++;


        return {


            correct:true,


            message:
                "Excellent! 🎉",


            score:
                Game.score,


            streak:
                Game.streak

        };


    }


    else{


        Game.score -= 20;


        Game.streak = 0;


        return {


            correct:false,


            message:
                "Keep practising!",


            correctAnswer:
                Game.challenge.answer,


            score:
                Game.score,


            streak:
                Game.streak

        };

    }

}



// =====================================
// Get current challenge
// =====================================

function getChallenge(){

    return Game.challenge;

}



// =====================================
// Simple level system
// =====================================

function calculateLevel(){

    if(Game.score >= 2000){

        return 5;

    }


    if(Game.score >= 1200){

        return 4;

    }


    if(Game.score >= 700){

        return 3;

    }


    if(Game.score >= 300){

        return 2;

    }


    return 1;

}
