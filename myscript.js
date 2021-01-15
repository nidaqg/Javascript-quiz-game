//declare the variables needed to access all relevant elements from the html
var timerDisplay = document.querySelector("#timer");
var mainEl = document.querySelector("main");
var quizBox = document.querySelector(".quizBox");
var myButton = document.querySelector(".myButton");
var highScore = document.querySelector(".highScore");
var answerOptions = document.querySelector(".answerButtons");
var option1 = document.querySelector("#choice1");
var option2 = document.querySelector("#choice2");
var option3 = document.querySelector("#choice3");
var option4 = document.querySelector("#choice4");
var result = document.querySelector("#result");
var currentIndex = 0;

var wins = 0;
var losses = 0;



//function for the countdown timer
var timeLeft = 30;
function updateTimer() {
     timerInterval = setInterval(function () {
          timeLeft--;
          timerDisplay.textContent = timeLeft + " seconds left";

          //when timer reaches zero, clear interval function and display game over
          if (timeLeft === 0) {
               clearInterval(timerInterval);
               gameOver();
          }
     }, 1000);
}

//function to clear display and display game over when timer runs out
function gameOver() {
     timerDisplay = '';
     var gameOverImage = document.createElement("img");
     gameOverImage.setAttribute("src", "images/gameOver.png");
     mainEl.appendChild(gameOverImage);
     answerOptions.classList.add("visibility");
     quizBox.classList.add("visibility");
}

//function to start quiz
function startQuiz() {
     //start timer, remove the rules and start button created earlier
   updateTimer();
   var rules = document.querySelector("#rulesFirst");
   rules.remove();
   var startButton = document.querySelector("#startButton");
   startButton.remove();
   getQuestion();
}


function getQuestion () {


     //for (i = 0; i < theQuestions.length; i++) {
      currentQuestion = theQuestions[currentIndex];
      quizBox.textContent = currentQuestion.question;

               
     answerOptions.classList.remove("visibility");
     option1.textContent = currentQuestion.choice1;
     option2.textContent = currentQuestion.choice2;
     option3.textContent = currentQuestion.choice3;
     option4.textContent = currentQuestion.choice4;
     
     option1.addEventListener("click", selectAnswer);
     option2.addEventListener("click", selectAnswer);
     option3.addEventListener("click", selectAnswer);
     option4.addEventListener("click", selectAnswer);
        }
    // }
 
function selectAnswer (event) {

   var clicked = event.currentTarget.textContent;
   console.log(clicked)
   console.log(currentQuestion.answer)
   if (clicked === currentQuestion.answer) {
        result.textContent = "Correct Answer!";
        //currentIndex++
        //getQuestion();
        wins++;
        highScore.textContent = wins;
   }
   else {
        result.textContent = "Wrong answer!";
        //currentIndex++
       // getQuestion();
        wins--;
        highScore.textContent = wins;
   }

   if (currentIndex === theQuestions.length - 1) {
      gameOver();
   } 
   else {
        currentIndex++
        getQuestion()
   }



}



//Created variable which is array of all questions and answers
     var theQuestions = [
     {question: "Which of the following will write the message ‘Hello world!’ In an alert box?",
      choice1: "alertbox(Hello world!);",
      choice2: "alertnow(Hello world!);",
      choice3: "alert(“Hello world!”);",
      choice4: "giveAlert('Hello world!')",
      answer: "alert(“Hello world!”);"
     },
     {question: "Which if statement will execute code if the value of x is equal to 5?",
      choice1: "If (x === 5) {}",
      choice2: "If x = 5 {}",
      choice3: "If (x!= 5) {}",
      choice4: "If (x, 5) {}",
      answer: "If (x === 5) {}"
     },
     {question: "What does ParseInt() do?",
     choice1: "Changes a given variable into an integer value", 
     choice2: "Changes a given variable into a string", 
     choice3:"Changes a given variable into an array", 
     choice4: "Changes a given array into a string",
     answer: "Changes a given variable into an integer value"
     },           
     {question: "How do you write a ‘logical or’ in Javascript code?",
     choice1: "//",
     choice2: "$$",
     choice3: "%",
     choice4: "||",
     answer: "||"
     },             
     {question: "Which of the following functions of String object returns the character at the specified index?",
     choice1: "substri()",
     choice2: "indexOf()",
     choice3: "charAt()",
     choice4: "forEach()",
     answer: "charAt()"
     }             
     ];



function rulesFirst() {
     //onloading page, this will be called
     //create p element to hold rules, append it to quizBox
     var rulesFirst = document.createElement("p");
     rulesFirst.setAttribute("style", "margin-bottom:10px");
     rulesFirst.setAttribute("id", "rulesFirst");
     rulesFirst.textContent = "Try to answer the following Javascript related questions within the time limit. Keep in mind that incorrect answers will substract 5 seconds from the timer!";
     quizBox.appendChild(rulesFirst);
     //create start button, append it to quizBox and add click event
     var startButton = document.createElement("button");
     startButton.innerHTML = "Start Quiz";
     startButton.setAttribute("id", "startButton");
     //add styling to button using exisiting class in CSS
     startButton.classList.add("btn");
     myButton.appendChild(startButton);
     startButton.addEventListener("click", startQuiz);

}



rulesFirst ();

//onload, the page should display highscore counter which populates from local storage
//onload, display game rules and start button(generated from JS with create element, append element)

//on clicking start button, call updateTimer function + startGame function (init function?)

//startGame function start a series of questions, one afteer the other
//each question has multiple choice answers
//if user clicks correct answer, display 'Correct answer' below game
//if user clicks wrong answer, display 'wrong answer!' below game + substract 5 seconds from timer
//After each question, a new question takes it's place

//when all questions are answered or timer reaches zero, game is over
//display gameover screen, show score, show input space for user to input name
//validate input so it's not null
//save input + score as array in local storage
//get highscore array from local storage and populate high score display
//show buttons to reset or restart game (init?)
//Init function to initialise the page