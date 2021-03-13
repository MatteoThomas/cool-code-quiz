var questionEl = document.querySelector("#questions");
var timerElement = document.querySelector("#timer-count");

var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var answerButton = document.querySelector('#answer-button');

var answerListEl = document.querySelector('#answers');
var displayEl = document.querySelector('#display');



var timer;
var timerCount = 5;





// maria's code
//hides reset button
window.onload = function() {
  document.getElementById('reset-button').style.display = 'none';
  // pre game msg
  var pr = 'Press button to play';
  // finding questions element
  var el = document.getElementById('questions');
  // writing contents of pr to questions
  el.textContent = pr;
};


var index = 0;
var questions = [
  {
    question: "Which is not an Error Name value?",
    choices: ['Type Error', 'Syntax Error', 'Main Error', 'Reference Error'],
    answer: 'Main Error'
  },
  
  {
    question: "What does Boolean return?",
    choices: ['True/ False', '1/2', 'Yes / No', 'Correct / Missing'],
    answer: 'True / False'
  },

  {
    question: "How many values can be stored in an array",
    choices: ['1', '2', '3', '4'],
    answer: '4'
  },

  {
    question: "What type of value does a string contain?",
    choices: ['Numbers', 'Text', 'Boolean', 'JSON'],
    answer: 'Text' 
  }
]

function askquestion() {
  // sets currentQuestion to the index number the questions variable is on
  var currentQuestion = questions[index]
  
  var quest = quest.text(currentQuestion.questions)
  for(var i = 0; i < questions[index].choices; i ++) {
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
//<button value="to get food">to get food</button>



// The setTimer function starts and stops the timer 
function startTimer() {

  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      timerElement.textContent = '';
      
      gameOver();
      

    }

    //stops timer from going below 0
    if (timerCount === 0) {
      clearInterval(timer);
   

    }
    //  restart();
  }, 1000);

}



function hidestart() {

   document.getElementById('start-button').style.display = 'hide';
  
}


function gameOver() {
  console.log("Game over");
  var overMessage = "Game over";
  var el = document.getElementById('questions');
  el.textContent = overMessage;

}


startButton.addEventListener('click', function () {
  hidestart();
 

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