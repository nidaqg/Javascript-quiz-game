
var theDisplay = document.querySelector("#scoreDisplay");
var buttons = document.querySelector(".theButtons");


function renderHighScore () {

   var lastHS = localStorage.getItem("score");
   var theName = localStorage.getItem("name");

    var name = document.createElement("p");
    name.textContent = "Name: " + theName;
    theDisplay.appendChild(name);

    var score = document.createElement("p");
    score.textContent = "High Score: " + lastHS;
    theDisplay.appendChild(score);
  
    var resetButton = document.createElement("button");
    var clearButton = document.createElement("button");
    resetButton.classList.add("btn");
    clearButton.classList.add("btn");
    resetButton.textContent = "Restart Quiz";
    clearButton.textContent = "Clear High Score";


    buttons.appendChild(resetButton);
    buttons.appendChild(clearButton);

}


renderHighScore();