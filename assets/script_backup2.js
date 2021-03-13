var questionEl = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");

var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var answerButton = document.querySelector('#answer-button');

var answerListEl = document.querySelector('#answers');
var displayEl = document.querySelector('#display');


var q1;
var q2;
var q3;
var q4;

var a1;
var a2;
var a3;
var a4;


var timer;
var timerCount = 5;

// should reset game
resetButton = $('#reset-button').hide();
// pre game msg
var pr = 'Press button to play';
// finding questions element
var el = document.getElementById('questions');
// writing contents of pr to questions
el.textContent = pr;

/* marias code
var index = 0;
var questions = [
  {
    question: "why did the chicken cross the road?",
    choices: ['to get food', 'sleep', 'get to the other side'],
    answer: 'get to the other side'
  },
  {
    question: "why did the chicken cross the road?",
    choices: ['to get food', 'sleep', 'get to the other side'],
    answer: 'get to the other side'
  }
]
function askquestion() {
  var currentQuestion = questions[index]
  var html = html.text(currentQuestion.question)
  for (var i = 0; i < questions[index].choices) {
    var button = questions[index].choices[i]
    button.setAttribute('value', questions[index].choices[i])
  }
}
function checkAnswer() {
  if (this.value !== questions[index].answer) {
    // WRONGGG time--
  } else {
    // you are right!
  }
  index++
  if (index === questions.length) {
    endquiz()
  } else {
    askquestion()
  }
}
function saving() {
  var scores = JSON.parse(localStorage.getItem('scores')) || []
  var newScore = {
    name: name,
    score: timeLeft
  }
  scores.push(newScore)
  localStorage.setItem('scores', JSON.stringify(scores))
}
function printPage() {
  var scores = JSON.parse(localStorage.getItem('scores')) || []
  for (var i = 0; i < scores.length; i++) {
    displayName.textContent(scores.name)
    displayScore.textContent(scores.score)
  }
}
<button value="to get food">to get food</button>



*/


var q1 = ['1. Which is not an Error Name value?',
  '2. How many data types?',
  '3. Why use jQuery?',
  '4. What does Boolean return?'
];

var q2 = ['21. Which is not an Error Name value?',
  '22. How many data types?',
  '23. Why use jQuery?',
  '24. What does Boolean return?'
];


var a2;
a2 = ['2A',
  '2B',
  '2C',
  '2D'
];

var a1;
a1 = ['Type Error',
  'Syntax Error',
  'Main Error',
  'Reference Error'
];

// The setTimer function starts and stops the timer 
function startTimer() {

  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      timerElement.textContent = '';
      $('#reset-button').show();
      gameOver();
      

    }

    //stops timer from going below 0
    if (timerCount === 0) {
      clearInterval(timer);
   

    }
    //  restart();
  }, 1000);

}

/*function advance() {
  startButton.addEventListener('click', function () {
    for (i = 0; i < arraylength; i++) {
      qNumber = (i + 1);
      const newLocal = '<br />';
      questionEl += questions[i] + newLocal;
    }
  });
  var arraylength = q1.length;
  qNumber = 0;
  questionEl = '';
  var i;

  document.getElementById('questions').innerHTML = questionEl;
}
*/
function startGame() {
  console.log("Start game")
  timerCount = 5;
  $('#start-button').hide();
  startTimer();
  questionEl = $('#questions').show();
  var el = document.getElementById('questions');
  el.textContent = q1[1];
  makeButtons();

}
function advance() {
  var el = document.getElementById('questions');
  el.textContent = q2[1];
  makeButtons();
  
}




function makeButtons() {
  // Dynamically create buttons
  // Create a for-loop to iterate through the answers array - a1
  for (var i = 0; i < a1.length; i++) {
    // Create button
    var answerBtn = $('<button>');
    // Assign style to the button
    answerBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    // answerBtn.attr('data-answer', q1[i]);
    // Displays the variable a2 // 
    answerBtn.text(a2[i]);
    // Attach the letter element
    answerListEl.append(answerBtn);
  }
  
}

function gameOver() {
  console.log("Game over");
  var overMessage = "Game over";
  var el = document.getElementById('questions');
  el.textContent = overMessage;

}

startButton.addEventListener('click', function () {
  startGame();
});

/*document.getElementById("answer-button").addEventListener("click", function() {
  advance();
  console.log("ghfurikzn2my")
});
*/

answerButton.addEventListener('click', function () {
  gameOver();
  
});

resetButton.addEventListener('click', function () {
  
});