$(document).ready(function(){

var correctCount = 0;
var wrong = 0;
var clockRunning = false;
var level = 1;

var timeLeft = 10;
var timerId;
var questionOneAnswer = "";
var questionTwoAnswer = "";
var questionThreeAnswer = "";
var questionFourAnswer = "";
var questionFiveAnswer = "";
var questionSixAnswer = "";
var questionSevenAnswer = "";
var questionEightAnswer = "";
var questionNineAnswer = "";

//create objects for the questions with answers contained in them
var questionOne = {
    question: "What is the name of the creature that is half eagle, half horse?",
    answerOne: "Hippogriff",
    answerTwo: "Horgle",
    answerThree: "Thestral",
    correct: "option1",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }

};

var questionTwo = {
    question: "What broom did Harry Potter receive as a gift from Sirius Black?",
    answerOne: "Nimbus 2000",
    answerTwo: "Firebolt",
    answerThree: "Cleansweep 11",
    correct: "option2",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionThree = {
    question: "In Harry Potter and the Chamber of Secrets, what potion did Hermione brew in order to get information from Slytherin?",
    answerOne: "Amortentia",
    answerTwo: "Polyjuice",
    answerThree: "Felix Felicis",
    correct: "option2",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionFour = {
    question: "In the first book, which Gringotts vault was the Sorcerer's Stone kept in?",
    answerOne: "504",
    answerTwo: "217",
    answerThree: "713",
    correct: "option3",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionFive = {
    question: "How many points is the golden snitch worth in quidditch?",
    answerOne: "150",
    answerTwo: "200",
    answerThree: "100",
    correct: "option1",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionSix = {
    question: "What Animagus form can Sirius Black take at any time?",
    answerOne: "Wolf",
    answerTwo: "Rat",
    answerThree: "Dog",
    correct: "option3",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionSeven = {
    question: "What was the name of the person that posed as Mad Eye Moody in The Goblet of Fire?",
    answerOne: "Barty Crouch, Jr.",
    answerTwo: "Augustus Rookwood",
    answerThree: "Lucius Malfoy",
    correct: "option1",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionEight = {
    question: "What type of dragon did Harry Potter have to face during the Triwizard Tournament?",
    answerOne: "Swedish Short-Snout",
    answerTwo: "Hungarian Horntail",
    answerThree: "Chinese Fireball",
    correct: "option2",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

var questionNine = {
    question: "Who destroyed the last of Voldemort's horcruxes?",
    answerOne: "Hermione Granger",
    answerTwo: "Harry Potter",
    answerThree: "Neville Longbottom",
    correct: "option3",

    fillArea: function() {
        $("#questions").html(this.question);
        $("#answer-one").html(this.answerOne);
        $("#answer-two").html(this.answerTwo);
        $("#answer-three").html(this.answerThree);
    }
};

//function to begin first question of game
function runGame() {
    $("#container").show(500);
    startTimer()
    validate();
};

function validate(){
    if(level === 1){
        levelOne();
    } else if(level === 2){
        startTimer();
        $( "button" ).unbind();
        levelTwo();
    } else if(level === 3){
        startTimer();
        $( "button" ).unbind();
        levelThree();
    } else if (level === 4){
        startTimer();
        $( "button" ).unbind();
        levelFour();
    } else if (level === 5){
        startTimer();
        $( "button" ).unbind();
        levelFive();
    } else if (level === 6){
        startTimer();
        $( "button" ).unbind();
        levelSix();
    } else if (level === 7){
        startTimer();
        $( "button" ).unbind();
        levelSeven();
    } else if (level === 8){
        startTimer();
        $( "button" ).unbind();
        levelEight();
    } else if (level === 9){
        startTimer();
        $( "button" ).unbind();
        levelNine();
    }
}

//obtain value of user selection and valide answer for each question
function levelOne(){
    questionOne.fillArea();
    $("button").on("click", function() {
        questionOneAnswer = $(this).val();

        if(questionOneAnswer === questionOne.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(500);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionOneAnswer != questionOne.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Hippogriff!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        }
        
    })
};


function levelTwo(){
    //start your timer
    questionTwo.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionTwoAnswer = $(this).val();

        if(questionTwoAnswer === questionTwo.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionTwoAnswer != questionTwo.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Firebolt!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        }
    })
};


function levelThree(){
    questionThree.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionThreeAnswer = $(this).val();

        if(questionThreeAnswer === questionThree.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
            } else if(questionThreeAnswer != questionThree.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Polyjuice!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } 
    })
};

function levelFour(){
    questionFour.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionFourAnswer = $(this).val();

        if(questionFourAnswer === questionFour.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionFourAnswer != questionFour.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was 713!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } 
    })
};

function levelFive(){
    questionFive.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionFiveAnswer = $(this).val();

        if(questionFiveAnswer === questionFive.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionFiveAnswer != questionFive.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was 150!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } 
    })
};

function levelSix(){
    questionSix.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionSixAnswer = $(this).val();

        if(questionSixAnswer === questionSix.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionSixAnswer != questionSix.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Dog!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        }
    })
};

function levelSeven(){
    questionSeven.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionSevenAnswer = $(this).val();

        if(questionSevenAnswer === questionSeven.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionSevenAnswer != questionSeven.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Barty Crouch, Jr!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        }
    })
};

function levelEight(){
    questionEight.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionEightAnswer = $(this).val();

        if(questionEightAnswer === questionEight.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } else if(questionEightAnswer != questionEight.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Hungarian Horntail!");
            $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
            setTimeout(validate, 4000);
            clearInterval(timerId);
            timeLeft = 10;
        } 
    })
};

function levelNine(){
    questionNine.fillArea();
    $("#correct-wrong").slideUp(500);
    $("#container").show(500);
    $("button").on("click", function() {
        questionNineAnswer = $(this).val();

        if(questionNineAnswer === questionNine.correct){
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            correctCount++;
            level++;
            $("#time-up").html("Good job!");
            $("#counter").html("You got " + correctCount + "/9 right, and " + wrong + " wrong!");
            clearInterval(timerId);
        } else if(questionNineAnswer != questionNine.correct) {
            $("#container").slideUp(500);
            $("#correct-wrong").show(0);
            wrong++;
            level++;
            $("#time-up").html("Oops, that was wrong! The answer was Neville Longbottom!");
            $("#counter").html("You got " + correctCount + "/9 right, and " + wrong + " wrong!");
            clearInterval(timerId);
        } 
    })
};


    //  time converter
 function timeConverter (t) {

      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (minutes === 0) {
        minutes = "00";

      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes + ":" + seconds;
};
function startTimer(){
    timerId = setInterval(timer, 1000)
}

function timer(){
    timeLeft--;
        //display to the screen
    $("#timer").text(timeConverter(timeLeft));
    if (timeLeft == 0) {
        timeLeft = 10;
        clearInterval(timerId)
        $("#container").slideUp(500);
        $("#correct-wrong").show(0);
        wrong++;
        level++;
        $("#time-up").html("Sorry, time's up!");
        $("#counter").html("You've gotten " + correctCount + "/9 right, and " + wrong + " wrong!");
        setTimeout(validate, 4000);
        
    }
}

//function to start game upon click of play button and hide what's not needed at the time
$("#correct-wrong").hide(0);
$("#container").hide(0);
$("#play-button").on("click", function(){
    $("#game-start").slideUp(500);
    runGame();
});

})