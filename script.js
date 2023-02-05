var headerdiv = document.getElementsByClassName("header");

var score = 0;

 var timeEl= document.querySelector(".time");

var startbtn = document.querySelector(".startbtn");

const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup", "HyperText Mode", "HydroText Mark", "HyperTrue Markup"],
        answer: "HyperText Markup"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Car Style Sound", "C Style Sheet", "Cascading Style Sheets", "Capture Style Stuff"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does the s in https stand for?",
        choices: ["safe", "secure", "sexy", "stuff"],
        answer: "secure"
    },
    {
        question: "What does .js stand for?",
        choices: ["javascript", "jason", "javasquare", "jayson"],
        answer: "javascript"
    },
];

var currentQuestion=0;

// var quizquestions = document.getElementById("quiz-title"); 
// var firstanswer = document.getElementById("firstanswer");

startbtn.addEventListener("click", setTime);
document.getElementById("quiz-page").style.display = "none";
document.getElementById("score-page").style.display = "none";
document.getElementById("header").style.display = "none";
var i =0;

function showQuestion() {
// document.getElementById("quiz-title").innerHTML = questions[i].question;
var title = document.createElement("h2");
title.innerHTML = questions[i].question;
document.getElementById("quiz-page").appendChild(title);
 
 for(var j=0; j < questions[i].choices.length; j++){
    var btn=document.createElement("button");
    btn.innerHTML = questions[i].choices[j];
   
    document.getElementById("quiz-page").appendChild(btn);

btn.addEventListener("click", function(event) {
   
    
    document.getElementById("quiz-page").innerHTML = "";

    var selected = event.target.textContent;

console.log(selected)
console.log(questions[i].answer)

     CheckAnswer(selected, questions[i].answer);

        i++;

        if (i < questions.length){
          
        showQuestion();

        } else {
            clearInterval(timerInterval);
            document.getElementById("score-page").style.display = "block";
            document.getElementById("score").textContent = "Score: " + score;
            document.getElementById("quiz-page").style.display = "none";
            document.getElementById("start-page").style.display ="none";

        }
    })
 }}
    
 function CheckAnswer (selected, correct) {
    if (selected == correct){
        score++;
  

    } else {
        secondsLeft-=5;
        console.log("test")
    }

console.log(score)
 }
var secondsLeft=15;
var timerInterval;

function setTime() {
 document.getElementById("start-page").style.display="none";
 document.getElementById("quiz-page").style.display = "block";
 document.getElementById("header").style.display = "block";

    
 timeEl.textContent = secondsLeft + " sec";
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " sec";
    
    if(secondsLeft===0 || secondsLeft < 0 ) {
        clearInterval(timerInterval);
        timeEl.textContent = "Game Over";
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("score-page").style.display = "block";
        // document.getElementById("start-page").style.display="block";
    }
}, 1000);
}

showQuestion();


var savebtn = document.querySelector(".savebtn");
var userinitials = document.querySelector("#userinitials");
var userscore = document.querySelector("#userscore"); 

//////////////////////////////

savebtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var initials = document.querySelector("#username").value

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);

  renderLastUser();
    }
)

function renderLastUser (){
    var user = localStorage.getItem("initials");
    var userScore = localStorage.getItem("score");
console.log("test")
    userinitials.textContent = user;
    userscore.textContent = userScore;

}
// for (var i=0; i<questions.lenght; i++) {
//     var quizquestions = document.getElementById("quiz-title");
//     quizquestions.textContent = questions[i];
//     add if statement for deducting time if wrong answer.

// function saveLastScore() {
//   // Save related form data as an object
//   var studentScore = {
//     student: student.value,
  
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
// }

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveLastGrade();
// renderLastGrade();
// })