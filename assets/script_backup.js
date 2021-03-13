var question = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var answerListEl = $('#answers');
var displayEl = $('#display');
var timer;
var timerCount = 5;
var nextQuestion;

// The init function is called when the page loads 
function init() {
    // getWins();
    // getlosses();
}

// The setTimer function starts and stops the timer 
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
      
        
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 5) {
            clearInterval(timer);
            $('#timer-count').show();
            
        }


        if (timerCount === 0) {
            clearInterval(timer);
       //    $('#timer-count').hide();
            
        }
        gameOver(); 
    
      }, 1000);
    return;
}


function startGame() {
    console.log("Start game")
    timerCount = 5;
    $('#start-button').hide();
    startTimer();
   // nextQuestion();
    Q1();
}

function Q1() {
    question.textContent = "This is question 1";
   
   newFunction();
    function newFunction() {
        renderAnswers();
    }

   function renderAnswers() {
    var answers = [
      '1a',
      '1b',
      '1c',
      '1d'
    ];
 
    // Dynamically create buttons
    // Create a for-loop to iterate through the answers array.
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
    
}

function Q2() {
    question.textContent = "This is question 2";
   
   newFunction();
    function newFunction() {
        renderAnswers();
    }

   function renderAnswers() {
    var answers = [
      '2a',
      '2b',
      '2c',
      '2d'
    ];
 
    // Dynamically create buttons
    // Create a for-loop to iterate through the answers array.
    for (var i = 0; i < answers.length; i++) {
      // Create button
      var answerBtn = $('<button>');
      // Assign style to the button
      answerBtn.addClass('letter-button btn btn-info');
      // Assign the letter to the data-answer attribute
      answerBtn.attr('data-answer', answers[i]);
      // Display the answer
      answerBtn.text(answers[i]);
      // Attach the letter element
      answerListEl.append(answerBtn);
    }
  }
    
}

  
  // Delegate event listener to the parent element, <div id="buttons">
  answerListEl.on('click', function (event) {
    var displayAnswerEl = $('<#answers>');
    // get letter from clicked letter button's `data-letter` attribute and use it for display
   //displayAnswerEl.text($(event.target).attr('data-answer'));
   // displayEl.append(displayAnswerEl);
  });



function gameOver() {
    console.log("Game Over :( ");

}

//function nextQuestion() {


startButton.addEventListener('click', function () {
    startGame();
});
answerListEl.addEventListener('click', function () {
    nextQuestion();
});
