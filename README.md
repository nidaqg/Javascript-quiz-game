# Javascript-quiz-game
A timed multiple choice quiz made using Javascript

For this project, I was required to create a coding quiz using Javascript. The quiz app will run in the browser and work as follows:

1) On opening the page, the user will be shown a screen with rules and a start button. 

2) Upon clicking the button, the screen will show the first of 5 multiple choice questions and the timer will start counting down from 30 seconds. 

3) For each question, if the user clicks the correct answer, their score will increment and 'correct answer!" will display below the quiz. If the incorrect answer is clicked, 5 seconds will be be deducted from the timer and "wrong answer!" will display below the quiz. 

4) Once the timer ends OR all the questions have been displayed, the screen will display the "Game over" message together with the user's score and an input field to input initials. 

5) Upon inputting the initials and clicking submit, the input will be validated and the initials/score pair will be stored in local storage.

6) The user will then be sent to a High Scores page that will display the high scores with the initials (this data will be retrieved from local storage). The user will also be presented with two buttons, one to restart the quiz and one to reset the high score and remove it from local storage.

For making this app I made use of basic html and css and concentrated mainly on Javascript. Where possible I generated (or removed) elements and attributes dynamically through Javascript and made use of multiple functions to run each component of the game. 

Below is an image of the UI of the game as displayed to the user:
![images/start-page-demo.png] 

![images/question-display-demo.png]

![images/gameover-screen-demo.png]

![images/highscore-page-demo.png]


Below is the link to the GitHub repository:
https://github.com/nidaqg/Javascript-quiz-game 

Below is the link to the deployed game:
https://nidaqg.github.io/Javascript-quiz-game/ 
