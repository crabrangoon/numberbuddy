//
// challenges.js
// Memory challenge generator
//


// =====================================
// Full Recall
// =====================================

function createFullRecall(number){

    return {

        type:"fullRecall",

        question:
            "Dial the entire number",

        display:
            hideBody(),

        answer:
            cleanPhone(number)

    };

}



// =====================================
// Missing Digit
//
// Example:
//
// 04 123_ 5678
//
// Answer:
// 4
// =====================================

function createMissingDigit(number){

    let position =
        randomMemoryPosition();


    let body =
        phoneBody(number);


    return {

        type:"missingDigit",

        question:
            "Which digit is missing?",


        display:
            maskDigit(
                number,
                position
            ),


        answer:
            body[position]

    };

}



// =====================================
// Position Recall
//
// Example:
//
// What is digit #5?
// =====================================

function createPositionChallenge(number){

    let position =
        randomMemoryPosition();


    let body =
        phoneBody(number);


    return {

        type:"position",


        question:
            "What is digit " 
            + (position + 1)
            + "?",


        display:
            formatPhone(number),


        answer:
            body[position]

    };

}



// =====================================
// Chunk Challenge
//
// Example:
//
// Which chunk comes next?
// =====================================

function createChunkChallenge(number){

    let chunks =
        chunkPhone(number);


    let index =
        randomInt(1,2);


    return {

        type:"chunk",


        question:
            "Remember this chunk",


        display:
            chunks
                .slice(0,index)
                .join(" "),

        answer:
            chunks[index]

    };

}



// =====================================
// Chop Challenge
//
// Example:
//
// 123|45678
//
// Player restores number
// =====================================

function createChopChallenge(number){

    let chops =
        generateChops(number);


    let chop =
        randomItem(chops);


    return {

        type:"chop",


        question:
            "Rebuild the chopped number",


        display:
            "04 "
            + chop,


        answer:
            phoneBody(number)

    };

}



// =====================================
// Swap Challenge
//
// Chunks are reversed
// =====================================

function createSwapChallenge(number){


    let swapped =
        swapChunks(number);


    return {

        type:"swap",


        question:
            "Swap the chunks back",


        display:
            "04 "
            + swapped[0]
            + " "
            + swapped[1],


        answer:
            phoneBody(number)

    };

}



// =====================================
// Pick Random Challenge
// =====================================

function generateChallenge(number){


    let challenges = [

        createFullRecall,

        createMissingDigit,

        createPositionChallenge,

        createChunkChallenge,

        createChopChallenge,

        createSwapChallenge

    ];


    let chosen =
        randomItem(challenges);


    return chosen(number);

}
