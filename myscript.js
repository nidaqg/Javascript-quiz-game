//declare the variables needed to access all relevant elements from the html
var timerDisplay = document.querySelector("#timer");
var mainEl = document.querySelector("main");
var quizBox = document.querySelector(".quizBox");

//function for the countdown timer
var timeLeft = 30;
function updateTimer () {
     timerInterval = setInterval (function(){
      timeLeft--;
      timerDisplay.textContent = timeLeft + " seconds left";
      
      //when timer reaches zero, clear interval function and display game over
      if(timeLeft === 0) {
           clearInterval(timerInterval);
           gameOver();
      }

     }, 1000);
}

//function to clear display and display game over when timer runs out
function gameOver () {
     timerDisplay = '';
     var gameOverImage = document.createElement("img");
     gameOverImage.setAttribute("src", "images/gameOver.png");
     quizBox.appendChild(gameOverImage);
}

updateTimer();


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