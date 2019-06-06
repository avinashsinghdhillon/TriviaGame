

//create an array of objects that contain the questions, options and the correct answer
const dictionary = 
[
    {
        id: 1,
        question: "Our solar system is in which galaxy?",
        options: {
            a: "Andromeda",
            b: "Milky Way",
            c: "Centaurus A",
            d: "Canis Major"
        },
        correctAnswer : "b"
    },
// #region dictionary
    {
        id: 2,
        question: "What is the collective name for a group of lions?",
        options: {
            a: "Pack",
            b: "Gaggle",
            c: "Group",
            d: "Pride"
        },
        correctAnswer : "d"
    },

    {
        id: 3,
        question: "When did the Liberty Bell get its name?",
        options: {
            a: "when it was made, in 1701",
            b: "when it rang on July 4, 1776",
            c: "in the 19th century, when it became a symbol of the abolition of slavery",
            d: "none of the above"
        },
        correctAnswer : "c"
    },

    {
        id: 4,
        question: "What is the biggest island in the world?",
        options: {
            a: "Long Island",
            b: "Madagascar",
            c: "Greenland",
            d: "Iceland"
        },
        correctAnswer : "c"
    },

    {
        id: 5,
        question: "Who wrote Macbeth?",
        options: {
            a: "Milton",
            b: "Webster",
            c: "Whitman",
            d: "Shakespeare"
        },
        correctAnswer : "d"
    },

    {
        id: 6,
        question: "What state is known as the Empire State?",
        options: {
            a: "North Carolina",
            b: "Florida",
            c: "New York",
            d: "California"
        },
        correctAnswer : "c"
    },

    {
        id: 7,
        question: "How many countries are in the United Kingdom",
        options: {
            a: "4",
            b: "3",
            c: "2",
            d: "1"
        },
        correctAnswer : "a"
    },

    {
        id: 8,
        question: "What is the tallest mammal?",
        options: {
            a: "Elephant",
            b: "Camel",
            c: "Giraffe",
            d: "Lion"
        },
        correctAnswer : "c"
    },

    {
        id: 9,
        question: "What is the capital of Italy?",
        options: {
            a: "Paris",
            b: "Rome",
            c: "Sicily",
            d: "Palermo"
        },
        correctAnswer : "b"
    },

    {
        id: 10,
        question: "What is the national game of the USA?",
        options: {
            a: "Baseball",
            b: "Basketball",
            c: "Football",
            d: "Hockey"
        },
        correctAnswer : "a"
    },

    {
        id: 11,
        question: "HP, Microsoft and Apple were all started in what?",
        options: {
            a: "Basement",
            b: "Store",
            c: "Garage",
            d: "Silicon Valley"
        },
        correctAnswer : "c"
    },

    {
        id: 12,
        question: "What is the name of the second Indiana Jones movie?",
        options: {
            a: "The Raiders of the Lost Ark.",
            b: "Crystal Skull",
            c: "Back to the Future",
            d: "Temple of Doom"
        },
        correctAnswer : "d"
    },


];
// #endregion

//Global variables
let pastQs = new Array();


/////////////////
//function calls
////////////////

//click event function for the "Start" button

$("#butt-Start").click(startGame)

function startGame(){
    //remove the start button
    $("#button-container").remove();

    let currQuestion = getNextQ();
    displayQ(currQuestion);
}


//////////////////////
//function definitions
//////////////////////

//this sets up the structure of the gameboard
function layoutGameboard() {
$
}

//select a randon question out of the dictionary (that has not been asked)
function getNextQ(){
    debugger;
    let foundNewQ = false;
    let newQ;
    while (!foundNewQ) {
        newQ = dictionary[Math.floor(Math.random() * dictionary.length)];
        console.log(newQ.id + " " + newQ.question);
        if(pastQs.indexOf(newQ.id) < 0){
            foundNewQ = true;
        }
    }
    //once a new question has been found, add it to Qs asked array
    pastQs.push(newQ.id);
    return newQ;
}

//this is where we put the 30 second timer
function displayQ(question){

}