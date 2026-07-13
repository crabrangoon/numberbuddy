//
// challenges.js
// Memory challenge generator
//


// =====================================
// Level 1
// Full Recall
// =====================================

function createFullRecall(number){

    return {

        type: "fullRecall",

        question:
            "📞 Dial the entire number",

        display:
            hideBody(),

        answer:
            cleanPhone(number)

    };

}





// =====================================
// Level 1
// Missing Digit
//
// Example:
// 04 123_ 5678
// Answer: 4
// =====================================

function createMissingDigit(number){

    let position =
        randomMemoryPosition();


    let body =
        phoneBody(number);


    return {

        type: "missingDigit",

        question:
            "❓ Which digit is missing?",


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
// Level 1
// Position Recall
//
// Example:
// What is digit 7?
//
// 04 1234 5█78
// =====================================

function createPositionChallenge(number){

    let position =
        randomMemoryPosition();


    let body =
        phoneBody(number);


    return {

        type: "position",

        question:
            "🎯 What is digit "
            + (position + 1)
            + "?",


        display:
            hideDigit(
                number,
                position
            ),


        answer:
            body[position]

    };

}





// =====================================
// Level 2
// Chunk Challenge
//
// Remember groups
// =====================================

function createChunkChallenge(number){

    let chunks =
        chunkPhone(number);


    let index =
        randomInt(1,2);


    return {

        type:"chunk",

        question:
            "🧩 Which chunk comes next?",


        display:
            chunks
                .slice(0,index)
                .join(" ")
            +
            " ____",


        answer:
            chunks[index]

    };

}





// =====================================
// Level 3
// Chop Challenge
//
// Example:
//
// 04 123|45678
// =====================================

function createChopChallenge(number){

    let body =
        phoneBody(number);


    let chopPoint =
        randomInt(
            1,
            body.length - 1
        );


    return {

        type:"chop",

        question:
            "🪓 Rebuild the chopped number",


        display:
            "04 "
            +
            body.slice(0,chopPoint)
            +
            "|"
            +
            body.slice(chopPoint),


        answer:
            body

    };

}





// =====================================
// Level 4
// Swap Challenge
//
// Example:
//
// 5678 1234
// =====================================

function createSwapChallenge(number){

    let chunks =
        chunkPhone(number);


    let swapped = [

        chunks[2],

        chunks[1],

        chunks[0]

    ];


    return {

        type:"swap",

        question:
            "🔄 Put the chunks back in order",


        display:
            swapped.join(" "),


        answer:
            chunks.join("")

    };

}





// =====================================
// Level 5
// Master Recall
// =====================================

function createMasterRecall(number){

    return {

        type:"masterRecall",

        question:
            "🧠 Master Recall: enter the number",


        display:
            "04 ████ ████",


        answer:
            cleanPhone(number)

    };

}





// =====================================
// Challenge Generator
// Unlock challenges by level
// =====================================

function generateChallenge(number){


    let level =
        calculateLevel();


    let available = [];



    // Level 1

    available.push(
        createFullRecall
    );


    available.push(
        createMissingDigit
    );


    available.push(
        createPositionChallenge
    );




    // Level 2

    if(level >= 2){

        available.push(
            createChunkChallenge
        );

    }




    // Level 3

    if(level >= 3){

        available.push(
            createChopChallenge
        );

    }




    // Level 4

    if(level >= 4){

        available.push(
            createSwapChallenge
        );

    }




    // Level 5

    if(level >= 5){

        available.push(
            createMasterRecall
        );

    }



    let selected =
        randomItem(available);



    return selected(number);


}
