var timerElement = document.querySelector("#timer-count");
var questionEl = document.querySelector("#questions");
var resetButton = document.querySelector("reset-button");
var answerButton = document.querySelector("#ab");
var startButton = document.querySelector("#start-button");
var answerEl = document.querySelector("#answerSection");
var timer;
var timerCount = 7;

window.onload = hideTimer();
hideReset();

var pr = 'Press button to play';
var el = document.getElementById('questions');
el.textContent = pr;

function reset() {
  hideReset();
  showStart();
  hideTimer();
  reload();

}

function reload() {
  location.reload();

}

function hideTimer() {
  document.getElementById("timer-count").style.display = 'none';
}

function showTimer() {
  document.getElementById("timer-count").style.display = 'initial';
}

function hideReset() {
  document.getElementById("reset-button").style.display = 'none';
}

function showReset() {
  document.getElementById("reset-button").style.display = 'initial';
}

function hideStart() {
  document.getElementById("start-button").style.display = 'none';
}

function showStart() {
  document.getElementById("start-button").style.display = 'initial';
}

function gameOver() {
  console.log("Game over");
  var overMessage = "Your score here";
  var el = document.getElementById('questions');
  el.textContent = overMessage;
  showReset();
  document.getElementById('answerSection').style.display = 'none';

}

function startTimer() {
  var timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      timerElement.textContent = 'Game over';
    }
    if (timerCount === 0) {
      clearInterval(timer);
      gameOver();
    }

  }, 1000);

}

var index = 0;
var questions = [{
    question: "Which is not an Error Name value?",
    choices: ['Type Error', 'Syntax Error', 'Main Error', 'Reference Error'],
    correct: 'Main Error'
  },

  {
    question: "What does Boolean return?",
    choices: ['True/ False', '1/2', 'Yes / No', 'Correct / Missing'],
    correct: 'True / False'
  },

  {
    question: "How many values can be stored in an array",
    choices: ['1', '2', '3', '4'],
    correct: '4'
  },

  {
    question: "What type of value does a string contain?",
    choices: ['Numbers', 'Text', 'Boolean', 'JSON'],
    correct: 'Text'
  }
]



let shuffleQuestions, currentQuestionIndex

function startGame() {

  document.getElementById("start-button").style.display = 'none';
  document.getElementById('answerSection').style.display = 'initial';
  shuffleQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;

  startTimer();
  showTimer();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
  nextQuestion();


}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex]

  questionEl.innerText = currentQuestion.question

  currentQuestion.choices.forEach(element => {
    var button = document.createElement('button')
    console.log(button)
    button.classList.add('ab')
    answerButton.innerText = element
    answerButton.appendChild(button)
    button.addEventListener('click', selectAnswers)

  })
}



function resetQuestion() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)

  }
}

function nextQuestion() {
  resetQuestion()
  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function selectAnswers() {
  if (this.textContent !== questions[currentQuestionIndex])
    timerCount -= 5;
  if (timerCount < 0) {
    timerCount = 0;
  } else {
    timerCount += 5;
  }
  timer.textContent = timerCount;
}

document.getElementById('answerSection').style.display = 'none';
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('reset-button').addEventListener('click', reset);
