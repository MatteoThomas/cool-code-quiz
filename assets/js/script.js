(function () {
  var content = document.getElementById("quiz");
  var quest = document.getElementById("quest");
  var result = document.getElementById("result");
  var startButton = document.getElementById("startButton");
  var timer = document.getElementById("timer");
  var timeLeft = 20;
  var startTime = 3;
  var score = document.getElementById("score");
  var currentScore = 0;
  var submitBtn = document.getElementById("submit");
  var txtInitials = document.getElementById("initials");

  document.getElementById("highScores").style.visibility = "hidden";
  document.getElementById("save-later-form").style.visibility = "hidden";
  document.getElementById("allInfo").style.visibility = "hidden";
  document.getElementById("score").style.visibility = "hidden";

  const soundBtn = document.getElementById("allInfo");
  let myAudio = document.querySelector("#audioStart");
  soundBtn.addEventListener("click", () => {
    myAudio.play();
  });

  const questions = [
    {
      question: "Which is not an Error Name value?",
      answers: [
        "a: Type Error",
        "b: Syntax Error",
        "c: Main Error",
        "d: Reference Error",
      ],
      correct: "c: Main Error",
    },

    {
      question: "What does Boolean return?",
      answers: [
        "a: True/ False",
        "b: 1/2",
        "c: Yes / No",
        "d: Correct / Missing",
      ],
      correct: "a: True/ False",
    },

    {
      question: "Which is not one of the four states of promise objects",
      answers: [
        " a: Fulfilled Settled",
        "b: Outside",
        "c: Pending",
        "d: Whole",
      ],
      correct: "d: Whole",
    },

    {
      question: "What type of value does a string contain?",
      answers: ["a: Numbers", "b: Text", "c: Boolean", "d: JSON"],
      correct: "b: Text",
    },
  ];

  var currentQuestionIndex = 0;

  function getQuestion() {
    content.textContent = "";
    result.textContent = "";
    var currentQuestion = questions[currentQuestionIndex];
    quest.textContent = currentQuestion.question;
    score.textContent = currentScore;
    timer.textContent = timeLeft;

    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.className = "answerBtn";
      choiceButton.setAttribute("value", currentQuestion.answers[i]);

      choiceButton.textContent = currentQuestion.answers[i];
      choiceButton.onclick = choiceSelect;
      content.appendChild(choiceButton);
      document.getElementById("title").style.opacity = 0.2;
    }
    document.getElementById("allInfo").style.visibility = "visible";
  }

  function choiceSelect() {
    if (this.value !== questions[currentQuestionIndex].correct) {
      timeLeft -= 3;
    } else {
      currentScore += 3;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      gameOver();
    } else {
      getQuestion();
    }
  }

  function gameOver() {
    result.textContent = "";
    timer.textContent = "";
    quest.textContent = "GAME OVER!";

    content.textContent = "";

    score.textContent = "Your score: " + currentScore;
    localStorage.setItem("score", currentScore);

    document.getElementById("save-later-form").style.visibility = "visible";
    document.getElementById("title").style.opacity = 1;
    document.getElementById("score").style.visibility = "visible";
  }

  function startTimer() {
    var timeInterval = setInterval(function () {
      timer.textContent = timeLeft + " seconds left";
      timeLeft--;

      if (timeLeft < 0) {
        $("#timer").hide();
        clearInterval(timeInterval);
        gameOver();
      } else if (currentQuestionIndex === questions.length) {
        timer.content = "";
        clearInterval(timeInterval);
        overSound();
        gameOver();
      }
    }, 1000);
  }

  function overSound() {
    var audio = new Audio("./assets/sfx/buzzer.wav");
    audio.loop = false;
    audio.play();
    console.log("over sfx");
  }
  //---------------------------------------------------------------------

  function shortTimer() {
    var startInterval = setInterval(function () {
      timer.textContent = startTime + " seconds until start";
      startTime--;
      if (startTime >= 0) {
        shortSound();
      } else if ((startTime = 0)) {
        timer.content = "";
        clearInterval(startInterval);
      }
    }, 1000);
  }

  function shortSound() {
    var audio = new Audio("./assets/sfx/tick.wav");
    audio.loop = false;
    audio.play();
    console.log("tick sfx");
  }

  function startSound() {
    var audio = new Audio("./assets/sfx/start2.wav");
    audio.loop = false;
    audio.play();
    console.log("start2 sfx");
  }

  //---------------------------------------------------------------------

  startButton.addEventListener("click", function () {
    content.textContent = "";
    $("#startButton").hide();
    // starts 3 sec timer
    shortTimer();
    // delay start, etc for 3 sec
    setTimeout(function () {
      startTimer();
      getQuestion();
      startSound();
    }, 4000);
    $("#highScoresBtn").hide();
  });

  submitBtn.addEventListener("click", function () {
    content.textContent = "";
    $(highScoresBtn).show();
    localStorage.setItem("initsSaved", txtInitials.value);
    showScores();
  });

  highScoresBtn.addEventListener("click", function () {
    content.textContent = "";
    $(highScoresBtn).hide();
    showScores();
    document.getElementById("highScores").style.visibility = "visible";
  });

  const initials = localStorage.getItem("initsSaved");
  const scoreSaved = localStorage.getItem("score");

  function showScores() {
    var inits = document.getElementById("highScoresI");
    var scored = document.getElementById("highScoresS");
    scored.textContent = scoreSaved;
    inits.textContent = initials;
  }
})();
