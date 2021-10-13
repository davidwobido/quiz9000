const questionList = [
  "Is this a quiz?",
  "Is the name of the quiz 'Quiz 9001'?",
  "Is the backgound blue?",
  "Is the font pink?",
  "Are there round corners?",
  "Do you still enjoy this quiz?",
];

const answerList = [true, false, true, false, true, false];
let questionIndex = 0;
let correctAnswer = answerList[questionIndex];

//Question counter
function updateProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questionList.length
  }`;
  // same as: "Question " + (questionIndex + 1) + "/" + questionList.length;
}

// Question
const question = document.querySelector(".question");
question.textContent = questionList[0];
updateProgress();

function nextQuestion() {
  questionIndex += 1;
  correctAnswer = answerList[questionIndex];
  const nextButton = document.createElement("p");

  nextButton.textContent = "Next Question";
  nextButton.className = "nextButton";
  Print.appendChild(nextButton);
  nextButton.onclick = function () {
    question.textContent = questionList[questionIndex];
    // questionIndex += 1;
    // Print.removeChild(document.querySelector(".correct"));
    // .querySelector(".quizcard")
    // .removeChild(document.querySelector(".print"));
  };
  updateProgress();
}

// Yes-Button
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect;
  }
};

// No-Button
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  // Variable resultElement anlegen, die ein p erstellt
  const resultElement = document.createElement("p");
  // p hat den Inhalt
  resultElement.textContent = "That’s right! 🙃";
  // p hat die Klasse
  resultElement.className = "correct";
  // resultElement dem body hinzufügen (append am Ende. prepend am Anfang.)
  // document.body.append(resultElement);
  Print.appendChild(resultElement);
  // disableButtons();
  nextQuestion();
}

function showAnswerIsIncorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "That’s wrong 🙁";
  resultElement.className = "incorrect";
  Print.appendChild(resultElement);
}
