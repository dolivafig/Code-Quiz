var headerdiv = document.getElementsByClassName("header");

 var timeEl= document.querySelector(".time");

var startbtn = document.querySelector(".startbtn");

const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1"
    },
    {
        question: "What does CSS stand for?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        question: "What does the s in https stand for?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 3"
    },
    {
        question: "What does HTML stand for?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 4"
    },
];

var currentQuestion=0;
var score = 0;
// var quizquestions = document.getElementById("quiz-title"); 
// var firstanswer = document.getElementById("firstanswer");

startbtn.addEventListener("click", setTime);
document.getElementById("quiz-page").style.display = "none";
console.log("click")

function setTime() {
 document.getElementById("start-page").style.display="none";
 document.getElementById("quiz-page").style.display = "block";

    var secondsLeft=5;
 timeEl.textContent = secondsLeft + " sec";
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " sec";
    
    if(secondsLeft===0) {
        clearInterval(timerInterval);
        timeEl.textContent = "Time is up!";
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("start-page").style.display="block";
    }
}, 1000);

for (var i=0; i<questions.lenght; i++) {
    var quizquestions = document.getElementById("quiz-title");
    quizquestions.textContent = questions[i];
// add if statement for deducting time if wrong answer.
}
} 

