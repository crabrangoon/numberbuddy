// =====================================
// utils.js
// Shared helper functions
// =====================================


// -------------------------------
// Remove spaces from a phone number
// -------------------------------
function cleanPhone(number) {

    return number.replace(/\s/g, "");

}


// -------------------------------
// Format Australian phone numbers
//
// 0412345678
// becomes
// 04 1234 5678
// -------------------------------
function formatPhone(number) {

    number = cleanPhone(number);

    if (number.length !== 10) {

        return number;

    }

    return (
        number.slice(0, 2)
        + " "
        + number.slice(2, 6)
        + " "
        + number.slice(6)
    );

}


// -------------------------------
// Return only the memorisation part
//
// 0412345678
// becomes
// 12345678
// -------------------------------
function phoneBody(number) {

    number = cleanPhone(number);

    return number.slice(2);

}


// -------------------------------
// Split into chunks
//
// chunkPhone("0412345678")
//
// returns
//
// [
//   "04",
//   "1234",
//   "5678"
// ]
// -------------------------------
function chunkPhone(number) {

    number = cleanPhone(number);

    return [

        number.slice(0,2),

        number.slice(2,6),

        number.slice(6)

    ];

}


// -------------------------------
// Random integer
// -------------------------------
function randomInt(min,max){

    return Math.floor(

        Math.random()*(max-min+1)

    ) + min;

}


// -------------------------------
// Pick one item
// -------------------------------
function randomItem(array){

    return array[

        randomInt(0,array.length-1)

    ];

}


// -------------------------------
// Fisher-Yates shuffle
// -------------------------------
function shuffle(array){

    let copy = [...array];

    for(

        let i=copy.length-1;

        i>0;

        i--

    ){

        let j = randomInt(0,i);

        [

            copy[i],

            copy[j]

        ]=[

            copy[j],

            copy[i]

        ];

    }

    return copy;

}


// -------------------------------
// Random digit position
//
// ignores the "04"
//
// returns
// 0-7
// -------------------------------
function randomMemoryPosition(){

    return randomInt(0,7);

}


// -------------------------------
// Replace one digit with "_"
//
// Example:
//
// 0412345678
//
// becomes
//
// 04 123_ 5678
// -------------------------------
function maskDigit(number,position){

    number = cleanPhone(number);

    let body = phoneBody(number);

    let chars = body.split("");

    chars[position] = "_";

    let result =

        "04"

        + chars.join("");

    return formatPhone(result);

}


// -------------------------------
// Replace one digit with █
//
// Example:
//
// 04 123█ 5678
// -------------------------------
function hideDigit(number,position){

    number = cleanPhone(number);

    let body = phoneBody(number);

    let chars = body.split("");

    chars[position] = "█";

    let result =

        "04"

        + chars.join("");

    return formatPhone(result);

}


// -------------------------------
// Hide entire body
//
// 04 ████ ████
// -------------------------------
function hideBody(){

    return "04 ████ ████";

}


// -------------------------------
// Generate chop points
//
// Returns:
//
// [
//   "1|2345678",
//   "12|345678",
//   ...
// ]
// -------------------------------
function generateChops(number){

    let body = phoneBody(number);

    let chops=[];

    for(

        let i=1;

        i<body.length;

        i++

    ){

        chops.push(

            body.slice(0,i)

            + "|"

            +

            body.slice(i)

        );

    }

    return chops;

}


// -------------------------------
// Swap chunks
//
// 1234|5678
//
// becomes
//
// 5678|1234
// -------------------------------
function swapChunks(number){

    let chunks = [

        phoneBody(number).slice(0,4),

        phoneBody(number).slice(4)

    ];

    return [

        chunks[1],

        chunks[0]

    ];

}
