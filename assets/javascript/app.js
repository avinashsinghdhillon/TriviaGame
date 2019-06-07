//an array of objects that contain the questions, options and the correct answer
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
        correctAnswer : "b",
        gifUrl: "https://media.giphy.com/media/BFHj2VF4vi3GE/giphy.gif"
    },
//#region dictionary
    {
        id: 2,
        question: "What is the collective name for a group of lions?",
        options: {
            a: "Pack",
            b: "Gaggle",
            c: "Group",
            d: "Pride"
        },
        correctAnswer : "d",
        gifUrl: "https://media.giphy.com/media/3D1TDbiZQZpyG9cqkg/giphy.gif"
    },

    {
        id: 3,
        question: "When did the Liberty Bell get its name?",
        options: {
            a: "when it was made, in 1701",
            b: "when it rang on July 4, 1776",
            c: "19th century, as a symbol of the abolition of slavery",
            d: "none of the above"
        },
        correctAnswer : "c",
        gifUrl: "https://media.giphy.com/media/xThtaal99W5J2Y9aZq/giphy.gif"
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
        correctAnswer : "c",
        gifUrl: "https://media.giphy.com/media/TL19pyp1mqas4hR3Md/giphy.gif"
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
        correctAnswer : "d",
        gifUrl: "https://media.giphy.com/media/l0MYEwUrE0ei2BAGc/giphy.gif"
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
        correctAnswer : "c",
        gifUrl: "https://media.giphy.com/media/3gEFiAYiHJJCg/giphy.gif"
    },

    {
        id: 7,
        question: "How many countries are in the United Kingdom",
        options: {
            a: "4 countries",
            b: "3 countries",
            c: "2 countries",
            d: "1 countries"
        },
        correctAnswer : "a",
        gifUrl: "https://media.giphy.com/media/jxbEDWXurUJ0rrUzpF/giphy.gif"
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
        correctAnswer : "c",
        gifUrl: "https://media.giphy.com/media/37zSwCqyaPtCg/giphy.gif"
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
        correctAnswer : "b",
        gifUrl: "https://media.giphy.com/media/3gIRvYEJQFZ2ZuuTIU/giphy.gif"
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
        correctAnswer : "a",
        gifUrl: "https://media.giphy.com/media/rXoweykKVzAMo/giphy.gif"
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
        correctAnswer : "c",
        gifUrl: "https://media.giphy.com/media/ABSItT0GoG2v6/giphy.gif"
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
        correctAnswer : "d",
        gifUrl: "https://media.giphy.com/media/Ued7qEpn6eKNq/giphy.gif"
    },


];
// #endregion

//Global variables
let currQuestion;
let pastQs = new Array();
let totalQCount = 0;
let correctAns = 0;
let incorrectAns = 0;
let missedQs = 0;
let mainTimerKey = 0;
let timeLeft = 0;


//////////////////////////////////
//function calls and event calls
//////////////////////////////////

//click event function for the "Start" button
$("#container").on("click", "#butt-Start", startGame);

//click event function for the reset button
$("#container").on("click", "#butt-Reset", resetGame);

//Click event function for the selected answer
$("#container").on("mouseup", ".option", function () {
    var param = $(this).attr("value");
    clearInterval(mainTimerKey);//stop the timer
    checkAnswer(param);
});

function startGame(){
    //remove the start button
    $("#button-container").remove();
    layoutGameboard();
    setupNewQuestion();
}

function setupNewQuestion (){
    currQuestion = getNextQ();
    displayQ();
    setTimer();
}

///////////////////////////////////////////////////////////
//Hover event that hightlights the selected answer/option
/////////////////////////////////////////////////////////////
$("#container").on("mouseenter", ".option", function(){
    //debugger;
    $(this).css({
        "background-color": "lavender"
    })
});

$("#container").on("mouseleave", ".option", function(){
    //debugger;
    $(this).css({
        "background-color": "rgba(210, 105, 30, 0.849)"
    })
});

//////////////////////
//function definitions
//////////////////////

//this sets up the wire structure of the gameboard
function layoutGameboard() {
    $("#container").append('<div id="gameboard"></div>');
    for (var r = 1; r <=5 ; r++){
        $("#gameboard").append('<div id="row' + r +'" class="row"></div>');
    }

    $("#row2").append('<p id="timer">Time remaining: </p>');
}

//select a randon question out of the dictionary (that has not been asked)
function getNextQ(){
    //debugger;
    let foundNewQ = false;
    let newQ;
    while (!foundNewQ) {
        newQ = dictionary[Math.floor(Math.random() * dictionary.length)];
        if(pastQs.indexOf(newQ.id) < 0){
            foundNewQ = true;
        }
    }
    //once a new question has been found, add it to Qs asked array
    pastQs.push(newQ.id);
    totalQCount++;
    return newQ;
}

//display the question and options
function displayQ(){
    //debugger;
    $("#row3").text(currQuestion.question);

    //clear row 5 of any previous data
    $("#row5").empty();
    //show the answer options
    for(letter in currQuestion.options){
        $("#row5").append(
            `<label class="option" value="${letter}">
            <input type="radio" class="option" value="${letter}">
            ${letter} :
            ${currQuestion.options[letter]}
            </label>`
        )
    }
}

//sets the timer on the single question
function setTimer(){
    mainTimerKey = setInterval(decrement, 1000);
    timeLeft = 30;
    $("#timer").text("Time remaining: " + timeLeft + " seconds");
}

function decrement(){
    timeLeft--;
    $("#timer").text("Time remaining: " + timeLeft + " seconds");
    if(timeLeft <= 0){
        clearInterval(mainTimerKey);
        missedQs++;
        showCorrectAnswer(0);
    }
}

//check answer function
function checkAnswer(answer){
    //debugger;
    console.log("Answer clicked: " + answer);
    if(answer === currQuestion.correctAnswer){
        correctAns++;
        showCorrectAnswer(1);
    }else{
        incorrectAns++;
        showCorrectAnswer(-1);
    }
}

function showCorrectAnswer(answerResult){
    $("#row5").empty();
    ///////////////////////////////////
    //add gifs to row 5
    /////////////////////////////////
    if(answerResult === 1){
        $("#timer").text("Correct!")
        $("#row3").text("");
    }else if (answerResult === -1){
        $("#timer").text("Nope! Correct answer was...")
        $("#row3").text(currQuestion.correctAnswer + ": " + 
            currQuestion.options[currQuestion.correctAnswer]);
    }else{
        $("#timer").text("Time's up! Correct answer was...")
        $("#row3").text(currQuestion.correctAnswer + ": " + 
            currQuestion.options[currQuestion.correctAnswer]);
    }
    $("#row5").append('<div id="image"><img id="gif" src="' + currQuestion.gifUrl + '" /></div>')
    setTimeout (checkGameOver, 5000);
}

function checkGameOver(){
    $("#row5").empty();
    //debugger;
    //check if quiz is complete
    if(totalQCount >= 5){
        showFinalScore();
    }else{
        setupNewQuestion();
    }
}

function showFinalScore(){
    $("#row1").text("Game complete! Here's your scores!")
    $("#row2").text("Correct answers: " + correctAns);
    $("#row3").text("Incorrect answers: " + incorrectAns);
    $("#row4").text("Missed questions: " + missedQs);
    $("#row5").append('<button id="butt-Reset">Reset</button>');
}

function resetGame(){
    $("#butt-Reset").remove();
    $("#gameboard").remove();
    $("#container").append('<div id="button-container">');
    $("#button-container").append('<button id="butt-Start">Start</button>');

    //reset global variables
    currQuestion = null;
    pastQs.length = 0;
    totalQCount = 0;
    correctAns = 0;
    incorrectAns = 0;
    missedQs = 0;
    mainTimerKey = 0;
    timeLeft = 0;
}