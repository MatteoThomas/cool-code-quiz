var question = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var timer;
var timerCount = 5;
var answerListEl = $('#answers');
var displayEl = $('#display');


// The init function is called when the page loads 
function init() {
    // getWins();
    // getlosses();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            $('#start-button').show();
            clearInterval(timer);
            $('#timer-count').hide();
        }
    }, 1000);
}


function startGame() {
    console.log("It works!")
    timerCount = 5;
    $('#start-button').hide();
    startTimer();
    Q1();
}

function Q1() {
    question.textContent = "How do you stop a function? ";
    renderAnswers();
}

function renderAnswers() {
    var answers = [
      'Return;',
      'Quit;',
      'Stop+',
      'Wait:'
    ];
  
    // Dynamically create buttons
    // Create a for-loop to iterate through the letters array.
    for (var i = 0; i < answers.length; i++) {
      // Create button
      var answerBtn = $('<button>');
      // Assign style to the button
      answerBtn.addClass('letter-button btn btn-info');
      // Assign the letter to the data-letter attribute
      answerBtn.attr('data-answer', answers[i]);
      // Display the letter
      answerBtn.text(answers[i]);
      // Attach the letter element
      answerListEl.append(answerBtn);
    }
  }
  
  // Delegate event listener to the parent element, <div id="buttons">
  answerListEl.on('click', function (event) {
    var displayAnswerEl = $('<div>');
  
    displayAnswerEl.addClass('answer');
  
    // get letter from clicked letter button's `data-letter` attribute and use it for display
   // displayAnswerEl.text($(event.target).attr('data-answer'));
   // displayEl.append(displayAnswerEl);
  });



function gameOver() {
    console.log("Game Over :( ");

}




startButton.addEventListener('click', function () {
    startGame();
});

init();