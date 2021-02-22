# Javascript-quiz-game
A timed multiple choice quiz made using Javascript

# Description
For this project, I was required to create a coding quiz using Javascript. The quiz app will run in the browser and work as follows:

1) On opening the page, the user will be shown a screen with rules and a start button. 

2) Upon clicking the button, the screen will show the first of 5 multiple choice questions and the timer will start counting down from 30 seconds. 

3) For each question, if the user clicks the correct answer, their score will increment and 'correct answer!" will display below the quiz. If the incorrect answer is clicked, 5 seconds will be be deducted from the timer and "wrong answer!" will display below the quiz. 

4) Once the timer ends OR all the questions have been displayed, the screen will display the "Game over" message together with the user's score and an input field to input initials. 

5) Upon inputting the initials and clicking submit, the input will be validated and the initials/score pair will be stored in local storage.

6) The user will then be sent to a High Scores page that will display the high scores with the initials (this data will be retrieved from local storage). The user will also be presented with two buttons, one to restart the quiz and one to reset the high score and remove it from local storage.

For making this app I made use of basic html and css and concentrated mainly on Javascript. Where possible I generated (or removed) elements and attributes dynamically through Javascript and made use of multiple functions to run each component of the game. 

Below are images of the UI of the game as displayed to the user:
![start-page-demo](images/start-page-demo.png) 

![question-display-demo](images/question-display-demo.png)

![gameover-screen-demo](images/gameover-screen-demo.png)

![highscore-page-demo](images/highscore-page-demo.png)


Below is the link to the GitHub repository:
https://github.com/nidaqg/Javascript-quiz-game 

For any questions or queries contact me at: nidaqg@gmail.com

Below is the link to the deployed game:
https://nidaqg.github.io/Javascript-quiz-game/ 

# License

MIT License

Copyright (c) [2021] [Nida_Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.