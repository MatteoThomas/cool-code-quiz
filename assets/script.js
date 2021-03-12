var questionEl = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");

var startButton = document.querySelector("#start-button");
var restartButton = document.querySelector("#restart-button");
var answerButton = document.querySelector('#answer-button');

var answerListEl = $('#answers');
var displayEl = $('#display');



var q1;
var q2;
var q3;
var q4;
var q5;

var timer;
var timerCount = 5;
var nextQuestion;

restartButton = $('#restart-button').hide();

var pr = 'Press button to play';
var el = document.getElementById('questions');
el.textContent = pr;

//questionEl = $('#questions').hide();

//init();
// The init function is called when the page loads 
//function init() {

// getWins();
// getlosses();
//}

var questions;
questions = ['Which is not an Error Name value?',
  'How many data types?',
  'Why use jQuery?',
  'What does Boolean return?'
];


var answers;
answers = ['A','B','C','D'
  'How many data types?',
  'Why use jQuery?',
  'What does Boolean return?'
];




//var pr = 'Game Over :(';
//var el = document.getElementById('questions');
//el.textContent = pr;

// The setTimer function starts and stops the timer 
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      timerElement.textContent = '';
      $('#restart-button').show();
      gameOver();
    }
    //stops timer from going below 0
    if (timerCount === 0) {
      clearInterval(timer);
    }
    //  restart();
  }, 1000);
  return;
}

function startGame() {
  console.log("Start game")
  timerCount = 5;
  $('#start-button').hide();
  startTimer();
  //questionEl = $('#questions').show();
  questionEl.textContent = questions[0];

}


function gameOver() {
  // console.log("Game Over :( ");
  var overMessage = "Game over :(";
  var el = document.getElementById('questions');
  el.textContent = overMessage;

}
/*
function makeButtons {
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
*/

function nextQuestion() {
  for (var i = 0; i < 10; i++) {


  }
}

startButton.addEventListener('click', function () {
  startGame();
});

restartButton.addEventListener('click', function () {
  //reload();
});

answerButton.addEventListener('click', function () {
  nextQuestion();
});