var headerdiv = document.getElementsByClassName("header");

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
        choices: [".javascript", ".jason", "javasquare", ".jayson"],
        answer: ""
    },
];

var currentQuestion=0;
var score = 0;
// var quizquestions = document.getElementById("quiz-title"); 
// var firstanswer = document.getElementById("firstanswer");

startbtn.addEventListener("click", setTime);
document.getElementById("quiz-page").style.display = "none";
document.getElementById("score").style.display = "none";
document.getElementById("header").style.display = "none";
var i =0;

function showQuestion() {
document.getElementById("quiz-title").innerHTML = questions[i].question;
var title = document.getElementById("quiz-title");
title.innerHTML = questions[i].question;
document.getElementById("quiz-page").appendChild(title);
 
 for(var j=0; j < questions[i].choices.length; j++){
    var btn=document.createElement("button");
    btn.innerHTML = questions[i].choices[j];
   
    document.getElementById("quiz-page").appendChild(btn);
    
btn.addEventListener("click", function() {
        if (questions[i].choices == questions[i].answer){
            score++;
            
        } else {
            secondsLeft-5;
        }
        i++;
        // var element = document.getElementById("quiz-page");
        // while (element.hasChildNodes()) {
            
        //     element.removeChild(element.firstChild)
        
        // }

        if (i < questions.length){
          
        showQuestion();
        } else {
            secondsLeft = 0;
        }
    })
}

    
}
    
var secondsLeft=15;

function setTime() {
 document.getElementById("start-page").style.display="none";
 document.getElementById("quiz-page").style.display = "block";
 document.getElementById("header").style.display = "block";

    
 timeEl.textContent = secondsLeft + " sec";
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " sec";
    
    if(secondsLeft===0 || secondsLeft < 0 ) {
        clearInterval(timerInterval);
        timeEl.textContent = "Time is up!";
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("score").style.display = "block";
       document.getElementById("score").innerHTML = score;
        // document.getElementById("start-page").style.display="block";
    }
}, 1000);
showQuestion();

// for (var i=0; i<questions.lenght; i++) {
//     var quizquestions = document.getElementById("quiz-title");
//     quizquestions.textContent = questions[i];
//     add if statement for deducting time if wrong answer.
}


