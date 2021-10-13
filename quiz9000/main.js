const questionList = [
  "Is this a quiz?",
  "Is the name of the quiz 'Quiz 9001'?",
  "Is the backgound blue?",
  "Is the font color pink?",
  "Do you still enjoy this quiz?",
];

const answerList = [true, false, true, false, true];
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
question.textContent = questionList[questionIndex];
updateProgress();

function finishQuiz() {
  const finishElement = document.querySelector(".quizcard");
  finishElement.textContent = "Finished 🏁";
  finishElement.className = "finishElement";
}

function nextQuestion() {
  questionIndex += 1;
  Print.removeChild(document.querySelector(".correct"));
  if (questionIndex < questionList.length) {
    correctAnswer = answerList[questionIndex];
    question.textContent = questionList[questionIndex];
    updateProgress();
  } else {
    finishQuiz();
  }
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
  Print.appendChild(resultElement);
  // disableButtons();
  setTimeout(nextQuestion, 800);
}

function showAnswerIsIncorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "That’s wrong 🙁";
  resultElement.className = "incorrect";
  Print.appendChild(resultElement);
}

// const nextButton = document.createElement("p");
// nextButton.textContent = "Next Question";
// nextButton.className = "nextButton";
// Print.appendChild(nextButton);
// nextButton.onclick = function () {
//   question.textContent = questionList[questionIndex];
//   // questionIndex += 1;
//   // Print.removeChild(document.querySelector(".correct"));
//   // .querySelector(".quizcard")
//   // .removeChild(document.querySelector(".print"));
